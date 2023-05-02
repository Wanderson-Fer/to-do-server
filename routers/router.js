const express = require('express');
const router = express.Router();

const controller = require('../controllers/controller');

router.get('/example', controller.getTasks);

router.post('/example', controller.addTask);

module.exports = router;