const express = require('express');
const router = express.Router();
const session = require('express-session');
const testController = require('../Controllers/userController');
const requireAuth = require('../middlewares/authMiddleware'); 


router.use(session({
    secret: 'manny',
    resave: false,
    saveUninitialized: true
  }));


router.post('/add-member', testController.createUser); 
router.get('/watchlist',testController.getWatchList); 
router.post('/login', testController.loginUser); 
router.post('/watchlistadd',requireAuth,testController.addToWatchList); 


  
  // Utilisation du middleware de vérification de session pour la route /api/essai
  router.get('/essai', requireSession, (req, res) => {
    const userId = req.session.user.id;
    res.json({ userId: userId });
  });



module.exports= router