INSERT INTO categoria(id, nombre) VALUES(1, 'Manubrios');
INSERT INTO categoria(id, nombre) VALUES(2, 'Asientos');
INSERT INTO categoria(id, nombre) VALUES(3, 'Llantas');
INSERT INTO categoria(id, nombre) VALUES(4, 'Frenos');
INSERT INTO categoria(id, nombre) VALUES(5, 'Pedales');


INSERT INTO producto(id, nombre, precio, id_categoria) VALUES(1, 'Manubrio clasico', 80.3, 1);
INSERT INTO producto(id, nombre, precio, id_categoria) VALUES(2, 'Asiento acolchado', 110, 2);
INSERT INTO producto(id, nombre, precio, id_categoria) VALUES(3, 'Llanta todo terreno', 150.99, 3);
INSERT INTO producto(id, nombre, precio, id_categoria) VALUES(4, 'Freno de disco', 185, 4);
INSERT INTO producto(id, nombre, precio, id_categoria) VALUES(5, 'Pedales de plataforma', 50, 5);

INSERT INTO cliente(id, nombre, apellido, celular, email, cumpleanos) VALUE (1, 'Alejandro', 'Rey Vera', '3103453489', 'alejoreyv@gamil.com', '2001-09-24');
INSERT INTO cliente(id, nombre, apellido, celular, email, cumpleanos) VALUE (2, 'Andres', 'Sanchez', '3117454308', 'andressanchez20@gmail.com', '1999-10-19');

INSERT INTO orden(id, estado, id_cliente) VALUES(1, 'Creado', 1);
INSERT INTO orden(id, estado, id_cliente) VALUES (2, 'Orden recogida', 2);