
const express = require('express');
const router = express.Router();
const filmController = require('../Controllers/filmController');

router.get('/films', filmController.getAllFilms);

module.exports = router;
