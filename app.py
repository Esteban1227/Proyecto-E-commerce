import json
from flask import Flask, render_template, request, redirect, session, url_for
from db.ConexionBD import ConexionBD

app = Flask(__name__, static_url_path='/static')

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

@app.route('/')
def inicio():
    if 'id' in session:
        id = session['id']
        return f'Bienvenido, {id}!'
    return redirect(url_for('login'))

if __name__ == '__main__':
    app.secret_key = 'super_secret_key'
    app.run(debug=True)