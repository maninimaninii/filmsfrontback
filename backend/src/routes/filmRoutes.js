const requireAuth = require('../middlewares/authMiddleware'); 
const express = require('express');
const filmController = require('../Controllers/filmController');
const router = express.Router();



router.get('/films',filmController.getAllFilms);
router.get('/series', filmController.getAllSeries);
router.get('/films/:id', filmController.getEntiteById);

module.exports = router;
