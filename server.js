import express from 'express';
import cors from 'cors';

// Rotas - Livros
import listarLivros from './rotas/listarLivros.js';
import buscarLivroPorId from './rotas/buscarLivroPorId.js';
import cadastrarLivro from './rotas/cadastrarLivro.js';
import atualizarLivro from './rotas/atualizarLivro.js';
import removerLivro from './rotas/removerLivro.js';

// Rotas - Clientes
import listarClientes from './rotas/listarCliente.js';
import buscarClientePorId from './rotas/buscarClientePorId.js';
import cadastrarCliente from './rotas/cadastrarCliente.js';
import atualizarCliente from './rotas/atualizarCliente.js';
import removerCliente from './rotas/removerCliente.js';

// Rotas - Pedidos
import listarPedidos from './rotas/listarPedidos.js';
import buscarPedidoPorId from './rotas/buscarPedidosPorId.js';
import cadastrarPedido from './rotas/cadastrarPedidos.js';
import atualizarPedido from './rotas/atualizarPedidos.js';
import removerPedido from './rotas/removerPedidos.js';

const app = express();
app.use(cors());
app.use(express.json());

// Endpoints - Livros
app.get('/livros', listarLivros);
app.get('/livros/:id', buscarLivroPorId);
app.post('/livros', cadastrarLivro);
app.put('/livros/:id', atualizarLivro);
app.delete('/livros/:id', removerLivro);

// Endpoints - Clientes
app.get('/clientes', listarClientes);
app.get('/clientes/:id', buscarClientePorId);
app.post('/clientes', cadastrarCliente);
app.put('/clientes/:id', atualizarCliente);
app.delete('/clientes/:id', removerCliente);

// Endpoints - Pedidos
app.get('/pedidos', listarPedidos);
app.get('/pedidos/:id', buscarPedidoPorId);
app.post('/pedidos', cadastrarPedido);
app.put('/pedidos/:id', atualizarPedido);
app.delete('/pedidos/:id', removerPedido);

app.listen(3000, () => {
  console.log('API (CRUD) ativa na porta 3000.');
});