CREATE DATABASE todo;

CREATE TABLE Tarea (
    id SERIAL PRIMARY KEY,
    descripcion VARCHAR,
    fechaCreacion DATE,
    vigente BOOLEAN
);