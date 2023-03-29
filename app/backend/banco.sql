DROP SCHEMA IF EXISTS RealEstate;
CREATE SCHEMA RealEstate;

USE RealEstate;

CREATE TABLE RealEstate.user(
user_id INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(100) NOT NULL,
password  VARCHAR(100) NOT NULL,
cpf VARCHAR(30) NOT NULL
);

INSERT INTO RealEstate.`user`(name, password, cpf)
VALUES 
('Lucas', '123456', '123.456.789-009'),
('Leticia', '798799', '123.458.779-009'),
('Arthur', '798LG799', '883.458.779-009'),
('Diego', '7888899', '783.458.789-009');

CREATE TABLE RealEstate.propiedades(
propiedades_id INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(100) NOT NULL,
custo VARCHAR(100) NOT NULL
);

INSERT INTO RealEstate.`propiedades`(name, custo)
VALUES
('casa azul', '250.00'),
('predio cinza', '550.80'),
('casa verde', '120.60'),
('predio verde', '400.60'),
('casa branca', '999.60'),
('casa verde claro', '89.60'),
('casa azul claro', '80.60'),
('casa cinza claro', '890.60'),
('predio cinza claro', '900.89'),
('predio cinza escuro', '998.89');




