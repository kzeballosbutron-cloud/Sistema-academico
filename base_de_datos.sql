CREATE DATABASE sistema_academico;

USE sistema_academico;

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    usuario_correo VARCHAR(100) NOT NULL UNIQUE,
    contrasena VARCHAR(255) NOT NULL
);

INSERT INTO usuarios (nombre, usuario_correo, contrasena) VALUES
('Brandon Saire', 'brandon_saire@usb.bo', 'CAMBIAR_CONTRASENA'),
('Kleber Paco', 'kleber_paco@usb.bo', 'CAMBIAR_CONTRASENA'),
('Aracely Alvarez', 'aracely_alvarez@usb.bo', 'CAMBIAR_CONTRASENA'),
('Kevin Zeballos', 'kevin_zeballos@usb.bo', 'CAMBIAR_CONTRASENA'),
('Edmar Quispe', 'edmar_quispe@usb.bo', 'CAMBIAR_CONTRASENA'),
('Silverio Ramos', 'silverio_ramos@usb.bo', 'CAMBIAR_CONTRASENA'),
('Lizeth Mamani', 'lizeth_mamani@usb.bo', 'CAMBIAR_CONTRASENA'),
('Paul Quispe', 'paul_quispe@usb.bo', 'CAMBIAR_CONTRASENA'),
('Misael Marca', 'misael_marca@usb.bo', 'CAMBIAR_CONTRASENA'),
('Alan Valencia', 'alan_valencia@usb.bo', 'CAMBIAR_CONTRASENA'),
('Jesus Coillo', 'jesus_coillo@usb.bo', 'CAMBIAR_CONTRASENA'),
('Niuton Vilca', 'niuton_vilca@usb.bo', 'CAMBIAR_CONTRASENA');

CREATE TABLE materias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    docente VARCHAR(100),
    semestre VARCHAR(30)
);

INSERT INTO materias (nombre, docente, semestre) VALUES
('Programación', 'Docente de Programación', '2026-I'),
('Base de Datos', 'Docente de Base de Datos', '2026-I'),
('Sistemas Académicos', 'Docente de Sistemas', '2026-I');
