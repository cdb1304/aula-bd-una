import bd from '../bd.js';

export default function atualizarCliente(req, res) {
  const { id } = req.params;

  const { nome, email, data_cadastro } = req.body;

  if (!nome || !email || !data_cadastro) 
    return res.status(400).json({ msg_erro: 'Todos os campos são obrigatórios para atualização!' });
    
  const query = 'UPDATE cliente SET nome = ?, email = ?, data_cadastro = ? WHERE id = ?';

  bd.query(query, [nome, email, data_cadastro, id], (erro, resultado) => {
    if (erro) 
      return res.status(500).json({ msg_erro: erro.message });

    if (resultado.affectedRows === 0) 
      return res.status(404).json({ mensagem: 'Cliente não encontrado para atualização!' });
    
    res.json({ mensagem: 'Cliente atualizado!', id, nome, email, data_cadastro });
  });
} 