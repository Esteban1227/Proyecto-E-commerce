import json
from flask import Flask
from flask import Flask, render_template
from db.ConexionBD import ConexionBD

app = Flask(__name__, static_url_path='/static')

@app.route('/api/users/<id>', methods=['GET'])

def obtener_usuario_por_id(id):
    conexion = ConexionBD()
    query_select = f"SELECT * FROM usuarios WHERE id='{id}'"
    resultados = conexion.select(query_select)
    if(resultados):
        datos_json = json.dumps(resultados) 
        return datos_json

@app.route('/api/users', methods=['GET'])

def obtener_usuarios():
    conexion = ConexionBD()
    query_select = "SELECT * FROM usuarios"
    resultados = conexion.select(query_select)
    if(resultados):
        datos_json = json.dumps(resultados) 
        return datos_json

@app.route('/')

def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)