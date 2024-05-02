const User = require('../models/usermodel');
const requireAuth = require('../middlewares/authMiddleware');
exports.createUser = (req, res) =>{
    const userData = req.body;
    User.createUser(userData, (result) =>{
        res.json(result);
    });
}



exports.getWatchList = (req, res) => {
  const userId = req.userId; 
  User.getWatchList(userId, (film) => {
    res.json(film);
  });
};


  exports.loginUser = (req, res) => {
    const { email, password } = req.body;
    User.loginUser(email, password, (result) => {
        res.json(result);
        console.log(result);
    });
};


  exports.addToWatchList = (req, res) =>{
    const UserId = req.session.user.id;
    const{filmId} = req.body;
    User.addtToWatchList(userId, filmId, (result)=>{
        res.json(result);
    });
}

