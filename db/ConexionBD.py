import psycopg2
from psycopg2 import OperationalError
from decouple import config

class ConexionBD:
    def __init__(self) -> None:
        pass
    
    def conectarBD(self):
        dbname=config('dbname')
        user=config('user')
        password=config('password')
        host=config('host')
        port=config('port')
        try:
            self.conexion = psycopg2.connect(
                    dbname=dbname,
                    user=user,
                    password=password,
                    host=host,  # O la dirección de tu servidor PostgreSQL
                    port=port        # El puerto por defecto es 5432
                )
            print("Conexion a la base de datos exitosa")
            self.cursor = self.conexion.cursor()    
        except OperationalError or Exception as e:
            print(f"Error al conectar a la base de datos: {e}")
            return None
    
    def cerrarBD(self):
        if self.conexion:
            print("Base de datos cerrada")
            self.conexion.close()
            
    def cerrarCursor(self):
        if self.cursor:
            print("Cursos cerrado")
            self.cursor.close()
            
    def select(self, query, params=None):
        try:
            self.conectarBD()
            self.cursor.execute(query, params)
            respuesta = self.cursor.fetchall()
            self.cerrarBD()
            self.cerrarCursor()
            return respuesta
        except Exception or OperationalError  as e:
            print(f"Error al hacer el select {e}")
            return None

    def delete(self, query, params=None):
        try:
            self.conectarBD()
            self.cursor.execute(query, params)
            self.conexion.commit()
            self.cerrarBD()
            self.cerrarCursor()
        except OperationalError or Exception as e:
            print(f"Error al hacer el delete {e}")
            return None

    def update(self, query, params=None):
        try:
            self.conectarBD()
            self.cursor.execute(query, params)
            self.conexion.commit()
            self.cerrarBD()
            self.cerrarCursor()
        except OperationalError or Exception as e:
            print(f"Error al hacer el uptadate {e}")
            return None

    def insert(self, query, params=None):
        try:
            self.conectarBD()
            self.cursor = self.conexion.cursor() 
            self.cursor.execute(query, params)
            self.conexion.commit()
            self.cerrarBD()
            self.cerrarCursor()
        except OperationalError or Exception as e:
                    print(f"Error al hacer el insert {e}")
                    return None

# Ejemplo de uso

# # Ejemplo de INSERT
# query_insert = "INSERT INTO public.usuarios(id, nombre, apellido, correo, contrasena) VALUES (%s, %s,%s, %s,%s);"
# params_insert = ('1', 'prueba', '1', 'prueba@gmail.com', '123')
# conexion.insert(query_insert, params_insert)

# # Ejemplo de DELETE
# query_delete = "DELETE FROM tabla WHERE condicion = %s"
# params_delete = (valor_condicion,)
# conexion.delete(query_delete, params_delete)

# # Ejemplo de UPDATE
# query_update = "UPDATE tabla SET columna = %s WHERE condicion = %s"
# params_update = (nuevo_valor, valor_condicion)
# conexion.update(query_update, params_update)

# Ejemplo de SELECT

# conexion = ConexionBD()
# query_select = "SELECT * FROM usuarios"
# resultados = conexion.select(query_select)
# if(resultados):
#     datos_json = json.dumps(resultados)
#     print(datos_json) 



   
