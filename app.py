import json
from flask import Flask, jsonify, render_template, request, redirect, send_from_directory, session, url_for
from werkzeug.utils import secure_filename
import os
from db.ConexionBD import ConexionBD

app = Flask(__name__, static_url_path='/static')

# Definir la carpeta donde se guardarán las imágenes
UPLOAD_FOLDER = 'static/upload/'

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

def allowed_file(filename):
    # Verificar si la extensión del archivo es permitida
    ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg'}
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

def get_uploaded_images():
    upload_dir = app.config['UPLOAD_FOLDER']
    return [filename for filename in os.listdir(upload_dir) if os.path.isfile(os.path.join(upload_dir, filename))]

@app.route('/registro', methods=['GET', 'POST'])

def registro():
    if request.method == 'POST':
        id = request.form['id']
        nombre = request.form['nombre']
        apellido = request.form['apellido']
        correo = request.form['correo']
        contrasena = request.form['contrasena']
        # Verificar si el usuario ya existe
        conexion = ConexionBD()
        query_select = f"SELECT * FROM usuarios WHERE id = {id}"
        resultados = conexion.select(query_select)
        if resultados:
            error = 'El nombre de usuario ya está en uso. Por favor, elige otro.'
            return render_template('formulario.html', error=error)
        else:
            # Crear el nuevo usuario}
            conexion = ConexionBD()
            conexion.insert("INSERT INTO public.usuarios(id, nombre, apellido, correo, contrasena) VALUES (%s, %s,%s, %s,%s);",(id, nombre, apellido, correo, contrasena))
            # Redireccionar al usuario a la página de inicio de sesión
            return redirect(url_for('login'))
    return render_template('formulario.html')

@app.route('/login', methods=['GET', 'POST'])

def login():
    if request.method == 'POST':
        id = request.form['id']
        contrasena = request.form['contrasena']
        # Verificar las credenciales del usuario en la base de datos
        conexion = ConexionBD()
        resultado = conexion.select(f"SELECT * FROM usuarios WHERE id = '{id}' AND contrasena = '{contrasena}'")
        if resultado:
            # Iniciar sesión
            session['id'] = id
            return redirect(url_for('inicio'))
        else:
            error = 'Nombre de usuario o contraseña incorrectos. Inténtalo de nuevo.'
            return render_template('formulario.html', error=error)
    return render_template('formulario.html')

@app.route('/registroProducto', methods=['GET', 'POST'])

def registroProducto():
    if request.method == 'POST':
        nombre = request.form['nombre']
        marca = request.form['marca']
        precio = request.form['precio']
        cantidad = request.form['cantidad']
        categoria = request.form['categoria']
        descripcion = request.form['descripcion']
        idUsuario = request.form['idUsuario']
        # Obtener el archivo de imagen del formulario
        if 'fileImg' not in request.files:
            return 'No se ha seleccionado ningún archivo de imagen'
        
        imagen = request.files['fileImg']
        # Verificar si se seleccionó un archivo
        if imagen.filename == '':
            return 'No se ha seleccionado ningún archivo de imagen'
        
        # Verificar si el archivo es una imagen permitida
        if imagen and allowed_file(imagen.filename):
            # Generar un nombre de archivo seguro
            filename = secure_filename(imagen.filename)
            
            # Guardar la imagen en el servidor
            imagen_guardada = os.path.join(app.config['UPLOAD_FOLDER'], filename)
            imagen.save(imagen_guardada)
        
        # Verificar si el usuario ya existe
        conexion = ConexionBD()
        query_select = f"SELECT * FROM usuarios WHERE id = '{idUsuario}'"
        resultados = conexion.select(query_select)
        if resultados:
            # Crear el nuevo producto
            conexion = ConexionBD()
            conexion.insert("INSERT INTO public.producto(nombre, marca, precio, categoria, descripcion, id_usuario, cantidad, img_producto) VALUES (%s, %s,%s, %s,%s,%s,%s,%s);",(nombre, marca, precio, categoria, descripcion, idUsuario, cantidad, filename))
            # Redireccionar al usuario a la página de inicio 
            return redirect(url_for('inicio'))
        else:
            error = 'El nombre de usuario ya está en uso. Por favor, elige otro.'
            return render_template('crearProducto.html', error=error)     
    return render_template('crearProducto.html')

# @app.route('/uploads/<filename>')
# def uploaded_file(filename):
#     return send_from_directory(app.config['UPLOAD_FOLDER'], filename)

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
            'img_producto': producto[8]
        }
        productos_dict.append(producto_dict)
    
    return jsonify(productos_dict)

@app.route('/producto/<id>')
def product_detail(id):
    return render_template('producto.html')

@app.route('/')
def inicio():
    if 'id' in session:
        # id = session['id']
        return render_template("index.html")
    return redirect(url_for('login'))

if __name__ == '__main__':
    app.secret_key = 'super_secret_key'
    app.run(debug=True)


