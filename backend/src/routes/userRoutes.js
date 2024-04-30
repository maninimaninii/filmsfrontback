const express = require('express');
const router = express.Router(); 
const userController = require('../Controllers/userController');
const requireAuth = require('../middlewares/authMiddleware'); 


router.post('/register', userController.createUser); 
router.post('/login', userController.loginUser); 

router.post('/watchlist', userController.addToWatchlist); 
router.get('/watchlist', requireAuth,userController.getWatchlist); 

module.exports = router;