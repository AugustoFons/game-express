var express = require('express');
var router = express.Router();

let gameController = require('../controllers/gameController')

// rutas
router.get('/', gameController.index);
router.post('/', gameController.create)

module.exports = router;
