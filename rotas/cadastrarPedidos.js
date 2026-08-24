import bd from '../bd.js';

export default function cadastrarPedido(req, res) {
  const { titulo, autor, preco, estoque } = req.body;

  if (!titulo || !autor || !preco || estoque === undefined) 
    return res.status(400).json({ msg_erro: 'Todos os campos são obrigatórios!' });
  
  const query = 'INSERT INTO pedido (id_cliente, id_livro, data_pedido, quantidade) VALUES (?, ?, ?, ?)';

  bd.query(query, [titulo, autor, preco, estoque], (erro, resultado) => {
    if (erro) 
      return res.status(500).json({ msg_erro: erro.message });

    res.status(201).json({ id: resultado.insertId, id_cliente, id_livro, data_pedido, quantidade });
  });
}