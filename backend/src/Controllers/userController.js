const User = require('../models/userModel')

exports.createUser = (req, res) =>{
    const userData = req.body;
    User.createUser(userData, (result) =>{
        res.JSON(result);
    });
}



exports.loginUser = (req, res) => {
    const { email, password } = req.body;
    User.getUserByEmail(email, (user) => {
      if (!user) {
        res.status(404).json({ message: 'Utilisateur non trouvé' });
      } else if (user.password !== password) {
        res.status(401).json({ message: 'Mot de passe incorrect' });
      } else {
        req.session.user = user;
        res.json({ message: 'Connecté avec succès' });
      }
    });
  };
  


exports.addToWatchList = (req, res) =>{
    const UserId = req.session.user.id;
    const{filmId} = req.body;
    User.addtToWatchList(userId, filmId, (result)=>{
        res.JSON(result);
    });
}


exports.getWatchList = (req, res) =>{
    const userId = req.session.user.id;
    User.getWatchList(userId, (watchlist) =>{
        res.JSON(watchlist);
    });
}