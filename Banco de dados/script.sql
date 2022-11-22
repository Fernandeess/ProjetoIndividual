DROP database gameofthrones;
CREATE DATABASE IF NOT EXISTS gameofthrones;
USE gameofthrones;

CREATE TABLE Usuario (
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45) NOT NULL,
email VARCHAR(256),
senha VARCHAR(100),
CONSTRAINT ctChkEmail CHECK (email LIKE "%@%"),
imgPerfil VARCHAR(2048) DEFAULT "https://github.com/Fernandeess/imagePerfil/blob/main/user.png?raw=true",
bio VARCHAR(200),
fkCasa int,
FOREIGN KEY (fkCasa) REFERENCES Casa(idCasa)
) ;

CREATE TABLE Casa(
idCasa INT PRIMARY KEY AUTO_INCREMENT,
nomeCasa VARCHAR(45),
brasaoCasa varchar(2048),
lema VARCHAR(256)
) AUTO_INCREMENT = 1000;

CREATE TABLE Quiz(
idQuiz INT PRIMARY KEY AUTO_INCREMENT,
nomeQuiz VARCHAR(45)
);

CREATE TABLE Pontos(
fkUsuario int,
fkQuiz int,
FOREIGN KEY (fkUsuario) REFERENCES Usuario(idUsuario),
FOREIGN KEY (fkQuiz) REFERENCES Quiz(idQuiz),
pontos int,
PRIMARY KEY(fkUsuario,fkQuiz)
);




INSERT INTO Casa(nomeCasa,brasaoCasa,lema) VALUES 

('Targaryen','https://github.com/Fernandeess/imagePerfil/blob/main/casas/Targeryan.png?raw=true','Fogo e Sangue'),

('Stark','https://github.com/Fernandeess/imagePerfil/blob/main/casas/stark.png?raw=true','O Inverno Está Chegando'),

('Arryn','https://github.com/Fernandeess/imagePerfil/blob/main/casas/arryn.png?raw=true','Tão alto quanto a honra'),

('Mormont','https://github.com/Fernandeess/imagePerfil/blob/main/casas/mormont.png?raw=true',' Aqui estamos nós'),

('Baratheon','https://github.com/Fernandeess/imagePerfil/blob/main/casas/baratheon.png?raw=true','Nossa é a fúria'),

('Greyjoy','https://github.com/Fernandeess/imagePerfil/blob/main/casas/greyjoy.png?raw=true','Nós não semeamos'),

('Lannister','https://github.com/Fernandeess/imagePerfil/blob/main/casas/lannister.png?raw=true','Ouça meu rugido!'),

('Tully','https://github.com/Fernandeess/imagePerfil/blob/main/casas/tully.png?raw=true','Família, Dever, Honra'),

('Hightower','https://github.com/Fernandeess/imagePerfil/blob/main/casas/hightower.png?raw=true','Nós iluminamos o caminho'),

('Tyrell','https://github.com/Fernandeess/imagePerfil/blob/main/casas/Tyrel.png?raw=true','Crescendo forte'),

('Velaryon','https://github.com/Fernandeess/imagePerfil/blob/main/casas/velaryon.png?raw=true','O velho, o verdadeiro, o bravo'),

('Bolton','https://github.com/Fernandeess/imagePerfil/blob/main/casas/bolton.png?raw=true','Nossas lâminas são afiadas'),

('Frey','https://github.com/Fernandeess/imagePerfil/blob/main/casas/frey.png?raw=true','Estamos unidos'),

('Tarly','https://github.com/Fernandeess/imagePerfil/blob/main/casas/tarly.png?raw=true','Primeiros em Batalha'),

('Martell','https://github.com/Fernandeess/imagePerfil/blob/main/casas/martell.png?raw=true',' Insubmissos, Não Curvados, Não Quebrados');
UPDATE Usuario SET bio = '' WHERE idUsuario = 1;
DELETE FROM Usuario where idUsuario =2;
SELECT * FROM Usuario ;

SELECT * FROM Casa;
/*
alter table  Casa RENAME column	 nome to nomeCasa;
SELECT * FROM Usuario join Casa on fkCasa = idCasa;
*/
UPDATE Usuario SET moeda = 300 WHERE idUsuario = 1;
UPDATE Usuario SET fkCasa = 1004 WHERE idUsuario = 2;
UPDATE Casa SET brasaoCasa = "https://github.com/Fernandeess/imagePerfil/blob/main/casas/Targeryan.png?raw=true" WHERE idCasa = 1000
UPDATE Casa SET lema = 'O Inverno Está Chegando' WHERE idCasa = 1001;
UPDATE Usuario SET imgPerfil = "https://yt3.ggpht.com/FqbY86a-M7aEtFFPSUDwVAdlOxPlz1K-sHgPPu-jbuGA0q8kY1fapScAVfWtq6OriQXNLT-h=s108-c-k-c0x00ffffff-no-rj" WHERE idUsuario = 1;
