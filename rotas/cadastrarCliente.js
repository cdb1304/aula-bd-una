import bd from '../bd.js';

export default function cadastrarCliente(req, res) {
  const { nome, email, data_cadastro } = req.body;

  if (!nome || !email || !data_cadastro) 
    return res.status(400).json({ msg_erro: 'Todos os campos são obrigatórios!' });
  
  const query = 'INSERT INTO cliente (nome, email, data_cadastro) VALUES (?, ?, ?)';

  bd.query(query, [nome, email, data_cadastro], (erro, resultado) => {
    if (erro) 
      return res.status(500).json({ msg_erro: erro.message });

    res.status(201).json({ id: resultado.insertId, nome, email, data_cadastro });
  });
}