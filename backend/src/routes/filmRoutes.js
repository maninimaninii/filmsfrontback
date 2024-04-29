
const express = require('express');
const router = express.Router();
const filmController = require('../Controllers/filmController');

router.get('/films', filmController.getAllFilms);
router.get('/series', filmController.getAllSeries);

module.exports = router;
