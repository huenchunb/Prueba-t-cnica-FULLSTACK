Prueba técnica FULLSTACK
Este es un proyecto creado con Java con Spring Boot, JPA y PostgreSQL para crear una API REST que permite listar, crear, editar y eliminar tareas.
Ademas, se creo una SPA con React.js que consume la API REST con RTK Query y Bootstrap para el diseño.

Características
Permite crear nuevas tareas.
Permite editar las tareas creadas cambiando la descripción y el estado vigente.
Permite eliminar las tareas.
Permite listar todas las tareas.


Para desplegar la aplicación se necesita IntelliJ IDEA como IDE, en el cual deben sincronizar las librerias MAVEN.
Para la base de datos deje un script para crear la base de datos y la tabla, de todas formas solo se debe crear
la base de datos en PostgreSQL y la aplicación tiene un archivo application.yml en el cual tiene toda la configuración
del usuario, contraseña y url de la bd, las cuales pueden editar para establecer la conexión. Esta con el método ddl-auto: create-drop
por lo cual, se creara la tabla al ejecutar el proyecto y se eliminara al terminar la ejecución.

Para desplegar la aplicación en React se necesita ejecutar en la raiz del proyecto el comando npm install para instalar los modulos utilizados
y para correr se necesita ejecutar npm start.