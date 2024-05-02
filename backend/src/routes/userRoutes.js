const express = require('express');
const testController = require('../Controllers/userController');
const requireAuth = require('../middlewares/authMiddleware'); 
const router = express.Router();



router.post('/add-member', testController.createUser); 
router.get('/watchlist',requireAuth,testController.getWatchList); 
router.post('/login', testController.loginUser); 
router.post('/watchlistadd',requireAuth,testController.addToWatchList); 

module.exports= router