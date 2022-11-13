DROP database gameofthrones;
CREATE DATABASE gameofthrones ;
USE gameofthrones;

CREATE TABLE Usuario (
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45) NOT NULL,
email VARCHAR(256),
senha VARCHAR(100),
moeda INT default 0,
CONSTRAINT ctChkEmail CHECK (email LIKE "%@%"),
fkCasa int,
FOREIGN KEY (fkCasa) REFERENCES Casa(idCasa),
imgPerfil VARCHAR(2048),
bio VARCHAR(200)
) ;
CREATE TABLE Casa(
idCasa INT PRIMARY KEY AUTO_INCREMENT,
nomeCasa VARCHAR(45),
brasaoCasa varchar(2048),
lema VARCHAR(256)
) AUTO_INCREMENT = 1000;



INSERT INTO Casa(nomeCasa,brasaoCasa,lema) VALUES 

('Targaryen','https://s.aficionados.com.br/imagens/targaryen.jpg','Fogo e Sangue'),

('Stark','https://s.aficionados.com.br/imagens/stark.jpg','Inverno Está Chegando'),

('Arryn','https://s.aficionados.com.br/imagens/arryn.jpg','Tão alto quanto a honra'),

('Mormont','https://s.aficionados.com.br/imagens/mormont.jpg',' Aqui estamos nós'),

('Baratheon','https://s.aficionados.com.br/imagens/baratheon.jpg','Nossa é a fúria'),

('Greyjoy','https://s.aficionados.com.br/imagens/greyjoy.jpg','Nós não semeamos'),

('Lannister','https://s.aficionados.com.br/imagens/lannister.jpg','Ouça meu rugido!'),

('Tully','https://s.aficionados.com.br/imagens/tully.jpg','Família, Dever, Honra'),

('Hightower','https://s.aficionados.com.br/imagens/hightower.jpg','Nós iluminamos o caminho'),

('Tyrell','https://s.aficionados.com.br/imagens/tyrell.jpg','Crescendo forte'),

('Velaryon','https://s.aficionados.com.br/imagens/casa-velaryon_cke.jpg','O velho, o verdadeiro, o bravo'),

('Bolton','','Nossas lâminas são afiadas'),

('Frey','https://s.aficionados.com.br/imagens/housefrey.jpg','Estamos unidos'),

('Tarly','https://s.aficionados.com.br/imagens/tarly.jpg','Primeiros em Batalha'),

('Martell','https://s.aficionados.com.br/imagens/martell.jpg',' Insubmissos, Não Curvados, Não Quebrados');
DELETE FROM Usuario where idUsuario =5;
SELECT * FROM Usuario;

SELECT * FROM Casa;
/*
alter table  Casa RENAME column	 nome to nomeCasa;
SELECT * FROM Usuario join Casa on fkCasa = idCasa;
*/
