DROP DATABASE IF EXISTS livraria_db;
CREATE DATABASE livraria_db;
USE livraria_db;

CREATE TABLE cliente (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    data_cadastro DATE NOT NULL
);

CREATE TABLE livro (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(150) NOT NULL,
    autor VARCHAR(100) NOT NULL,
    preco DECIMAL(10, 2) NOT NULL,
    estoque INT NOT NULL
);

CREATE TABLE pedido (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_cliente INT,
    id_livro INT,
    data_pedido DATE NOT NULL,
    quantidade INT NOT NULL,
    FOREIGN KEY (id_cliente) REFERENCES cliente(id) ON DELETE CASCADE,
    FOREIGN KEY (id_livro) REFERENCES livro(id) ON DELETE CASCADE
);

INSERT INTO cliente (nome, email, data_cadastro) VALUES
('Ana Silva', 'ana.silva@email.com', '2026-01-15'),
('Bruno Costa', 'bruno.costa@email.com', '2026-02-10'),
('Carlos Souza', 'carlos.souza@email.com', '2026-03-01');

INSERT INTO livro (titulo, autor, preco, estoque) VALUES
('Introdução ao SQL', 'Luke Code', 49.90, 15),
('Bancos de Dados Relacionais', 'Maria Ramalho', 89.90, 8),
('Lógica de Programação', 'Alan Turing', 35.00, 20);

INSERT INTO pedido (id_cliente, id_livro, data_pedido, quantidade) VALUES
(1, 1, '2026-03-05', 1), 
(2, 3, '2026-03-06', 2), 
(1, 2, '2026-03-07', 1); 

