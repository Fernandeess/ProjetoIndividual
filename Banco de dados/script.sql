CREATE DATABASE GameOfThrones ;
USE GameOfThrones;

CREATE TABLE Usuario (
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45) NOT NULL,
email VARCHAR(256),
senha VARCHAR(100),
pontos INT,
CONSTRAINT ctChkEmail CHECK (email LIKE "%@%"),
fkCasa int,
FOREIGN KEY (fkCasa) REFERENCES Casa(idCasa),
fkPerfil int,
FOREIGN KEY (fkPerfil) REFERENCES Perfil(idPerfil)
) ;
CREATE TABLE Casa(
idCasa INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45),
brasaoCasa varchar(2048),
lema VARCHAR(256)
) AUTO_INCREMENT = 1000;
CREATE TABLE Perfil(idPerfil INT PRIMARY KEY AUTO_INCREMENT,
imgPerfil VARCHAR(2048),
bio VARCHAR(200)
)AUTO_INCREMENT = 100;

INSERT INTO Casa(nome,brasaoCasa,lema) VALUES 

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

('Mormont','https://s.aficionados.com.br/imagens/mormont.jpg','Aqui estamos nós'),

('Velaryon','https://s.aficionados.com.br/imagens/casa-velaryon_cke.jpg','O velho, o verdadeiro, o bravo'),

('Bolton','','Nossas lâminas são afiadas'),

('Frey','https://s.aficionados.com.br/imagens/housefrey.jpg','Estamos unidos'),

('Tarly','https://s.aficionados.com.br/imagens/tarly.jpg','Primeiros em Batalha'),

('Martell','https://s.aficionados.com.br/imagens/martell.jpg',' Insubmissos, Não Curvados, Não Quebrados');



SELECT * FROM Usuario;
SELECT * FROM Perfil;
SELECT * FROM Casa;
