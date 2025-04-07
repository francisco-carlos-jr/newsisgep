const express = require('express');
const router = express.Router();
const sentenciadoController = require('../controllers/sentenciadoController');

router.get('/', sentenciadoController.getsentenciados);
router.post('/', sentenciadoController.createsentenciado);
router.put('/:id', sentenciadoController.updatesentenciado);
router.delete('/:id', sentenciadoController.deletesentenciado);

module.exports = router;