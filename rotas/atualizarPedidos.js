import bd from '../bd.js';

export default function atualizarPedido(req, res) {
  const { id } = req.params;
  
  const { id_cliente, id_livro, data_pedido, quantidade } = req.body;

  if (!id_cliente || !id_livro || !data_pedido || quantidade === undefined) 
    return res.status(400).json({ msg_erro: 'Todos os campos são obrigatórios para atualização!' });
    
  const query = 'UPDATE pedido SET id_cliente = ?, id_livro = ?, data_pedido = ?, quantidade = ? WHERE id = ?';

  bd.query(query, [id_cliente, id_livro, data_pedido, quantidade, id], (erro, resultado) => {
    if (erro) 
      return res.status(500).json({ msg_erro: erro.message });

    if (resultado.affectedRows === 0) 
      return res.status(404).json({ mensagem: 'Pedido não encontrado para atualização!' });
    
    res.json({ mensagem: 'Pedido atualizado!', id, id_cliente, id_livro, data_pedido, quantidade });
  });
} 