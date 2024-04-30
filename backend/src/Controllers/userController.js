const User = require('../models/usermodel');

exports.createUser = (req, res) =>{
    const userData = req.body;
    User.createUser(userData, (result) =>{
        res.json(result);
    });
}



exports.getWatchList = (req, res) => {
    const {id} = req.session.user.id;
    User.getWatchList(id, (film) =>{
      res.json(film);
    })
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
        console.log(req.session.user.id);
      }
    });
  };


  exports.addToWatchList = (req, res) =>{
    const UserId = req.session.user.id;
    const{filmId} = req.body;
    User.addtToWatchList(userId, filmId, (result)=>{
        res.json(result);
    });
}

