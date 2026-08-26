import bd from '../bd.js';
 
export default function cadastrarPedido(req, res) {
  const { id_cliente, id_livro, data_pedido, quantidade } = req.body;
 
  if (!id_cliente || !id_livro || !data_pedido || quantidade === undefined) 
    return res.status(400).json({ msg_erro: 'Todos os campos são obrigatórios!' });
  
  const query = 'INSERT INTO pedido (id_cliente, id_livro, data_pedido, quantidade) VALUES (?, ?, ?, ?)';
 
  bd.query(query, [id_cliente, id_livro, data_pedido, quantidade], (erro, resultado) => {
    if (erro) 
      return res.status(500).json({ msg_erro: erro.message });
 
    res.status(201).json({ id: resultado.insertId, id_cliente, id_livro, data_pedido, quantidade });
  });
}