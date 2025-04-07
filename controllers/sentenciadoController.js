const db = require('../models/db');

exports.getUsuarios = (req, res) => {
  db.query('SELECT * FROM cadastros', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};

exports.createUsuario = (req, res) => {
  const { nome, email } = req.body;
  db.query('INSERT INTO cadastros (nome, email) VALUES (?, ?)', [nome, email], (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ id: result.insertId, nome, email });
  });
};

exports.updateUsuario = (req, res) => {
  const { id } = req.params;
  const { nome, email } = req.body;
  db.query('UPDATE cadastros SET nome = ?, email = ? WHERE id = ?', [nome, email, id], (err) => {
    if (err) return res.status(500).send(err);
    res.json({ mensagem: 'Usuário atualizado' });
  });
};

exports.deleteUsuario = (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM cadastros WHERE id = ?', [id], (err) => {
    if (err) return res.status(500).send(err);
    res.json({ mensagem: 'Usuário deletado' });
  });
};