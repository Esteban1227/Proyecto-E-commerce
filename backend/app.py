from flask import Flask, jsonify, request
from flask_jwt_extended import JWTManager, jwt_required, create_access_token, get_jwt_identity
import os
from flask_cors import CORS
from ConexionBD import ConexionBD   
from werkzeug.utils import secure_filename
import base64


app = Flask(__name__)

CORS(app)

app.config['JWT_SECRET_KEY'] = 'your_secret_key'

jwt = JWTManager(app)

# Definir la carpeta donde se guardarán las imágenes
UPLOAD_FOLDER = './static/upload/'

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

def allowed_file(filename):
    # Verificar si la extensión del archivo es permitida
    ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg'}
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

def get_uploaded_images():
    upload_dir = app.config['UPLOAD_FOLDER']
    return [filename for filename in os.listdir(upload_dir) if os.path.isfile(os.path.join(upload_dir, filename))]

@app.route('/api/post/CreateProduct', methods=['POST'])

def crearProducto():
    try:
        datos = request.json
        nombre = datos.get('nombre')
        marca = datos.get('marca')
        precio = datos.get('precio')
        cantidad = datos.get('cantidad')
        categoria = datos.get('categoria')
        descripcion = datos.get('descripcion')
        idUsuario = datos.get('idUsuario')
        imagen_base64 = datos.get('fileImg')
        conexion = ConexionBD()
        conexion.insert("INSERT INTO public.producto(nombre, marca, precio, categoria, descripcion, id_usuario, cantidad, img_producto) VALUES (%s, %s,%s, %s,%s,%s,%s,%s);",(nombre, marca, precio, categoria, descripcion, idUsuario, cantidad, imagen_base64))
        return jsonify({'status': '200'})
    except:
        return jsonify({'error': '404'})
    

@app.route('/api/post/CreateUser', methods=['POST'])

def CreateUser():
    datos = request.json
    id = datos.get('id')
    nombre = datos.get('nombre')
    apellido = datos.get('apellido')
    correo = datos.get('correo')
    contrasena = datos.get('contrasena')
    # Verificar si el usuario ya existe
    if id and nombre and apellido and correo and contrasena:    
        conexion = ConexionBD()
        query_select = f"SELECT * FROM usuarios WHERE id = {id}"
        resultados = conexion.select(query_select)
        if resultados:
            return jsonify({'error': 'Ese numero de documento ya existe'}), 401
        else:
            # Crear el nuevo usuario}
            conexion = ConexionBD()
            conexion.insert("INSERT INTO public.usuarios(id, nombre, apellido, correo, contrasena) VALUES (%s, %s,%s, %s,%s);",(id, nombre, apellido, correo, contrasena))
            access_token = create_access_token(identity=id, expires_delta=False)
            return jsonify(access_token=access_token)
    else:
        return jsonify({'error': 'Se requiere todos los datos'}), 400

@app.route('/api/post/login', methods=['POST'])

def login():
    datos = request.json
    id = datos.get('id')
    contrasena = datos.get('contrasena')

    if id and contrasena:
        # Verificar las credenciales del usuario en la base de datos
        conexion = ConexionBD()
        resultado = conexion.select(f"SELECT * FROM usuarios WHERE id = '{id}' AND contrasena = '{contrasena}'")
        if resultado:
            access_token = create_access_token(identity=id, expires_delta=False)
            return jsonify(access_token=access_token)
        else:
            return jsonify({'error': 'Nombre de usuario o contraseña incorrectos'}), 401
    else:
        return jsonify({'error': 'Se requiere el ID y la contraseña'}), 400

@app.route('/protected', methods=['GET'])
@jwt_required()
def protected():
    current_user = get_jwt_identity()
    return jsonify(logged_in_as=current_user), 200

@app.route('/api/get/productos/<id>', methods=['GET'])

def obtenerProductosPorId(id):
    conexion = ConexionBD()
    resultado = conexion.select(f"SELECT * FROM public.producto WHERE id_producto = '{id}';") 
    productos_dict = []
    for producto in resultado:
        producto_dict = {
            'id': producto[0],
            'nombre': producto[1],
            'marca': producto[2],
            'precio': producto[3],
            'categoria': producto[4],
            'descripcion': producto[5],
            'id_usuario': producto[6],
            'cantidad': producto[7],
            'img_producto': producto[8]
        }
        productos_dict.append(producto_dict)
    
    return jsonify(productos_dict)

@app.route('/api/get/productos', methods=['GET'])

def obtenerProductos():
    conexion = ConexionBD()
    resultado = conexion.select(f"SELECT * FROM public.producto;") 
    productos_dict = []
    for producto in resultado:
        producto_dict = {
            'id': producto[0],
            'nombre': producto[1],
            'marca': producto[2],
            'precio': producto[3],
            'categoria': producto[4],
            'descripcion': producto[5],
            'id_usuario': producto[6],
            'cantidad': producto[7],
            'img_producto': producto[8].tobytes().decode('utf-8') 
        }
        productos_dict.append(producto_dict)
    
    return jsonify(productos_dict)

@app.route('/api/get/usuarios', methods=['GET'])

def obtenerUsuarios():
    conexion = ConexionBD()
    resultado = conexion.select(f"SELECT * FROM public.usuarios;") 
    listaUsuarios = []
    for usuario in resultado:
        diccionarioUsuarios = {
            'id': usuario[0],
            'nombre': usuario[1],
            'apellido': usuario[2],
            'correo': usuario[3],
            'contrasena': usuario[4],
        }
        listaUsuarios.append(diccionarioUsuarios)
    
    return jsonify(listaUsuarios)

@app.route('/api/get/usuarios/<id>', methods=['GET'])

def obtenerUsuariosPorId(id):
    conexion = ConexionBD()
    resultado = conexion.select(f"SELECT * FROM public.usuarios WHERE id = '{id}';") 
    listaUsuarios = []
    for usuario in resultado:
        diccionarioUsuarios = {
            'id': usuario[0],
            'nombre': usuario[1],
            'apellido': usuario[2],
            'correo': usuario[3],
            'contrasena': usuario[4],
        }
        listaUsuarios.append(diccionarioUsuarios)
    
    return jsonify(listaUsuarios)
# @app.route('/producto/<id>')
# def product_detail(id):
#     return render_template('producto.html')

# @app.route('/')
# def inicio():
#     if 'id' in session:
#         # id = session['id']
#         return render_template("index.html")
#     return redirect(url_for('login'))

if __name__ == '__main__':
    # app.secret_key = 'super_secret_key'
    app.run(debug=True)
