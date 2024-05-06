const User = require('../models/usermodel');
const requireAuth = require('../middlewares/authMiddleware');

exports.createUser = (req, res) =>{
    const userData = req.body;
    User.createUser(userData, (result) =>{
        res.json(result);
    });
}



exports.getWatchList = (req, res) => {
  const { userId } = req.auth; 
  User.getWatchList(userId, (watchlist) => {
    const watchlistObject = JSON.parse(watchlist.watchlist);
    res.json(watchlistObject);
  });
};


  exports.loginUser = (req, res) => {
    const { email, password } = req.body;
    User.loginUser(email, password, (result) => {
        res.json(result);
        console.log(result);
    });
};


exports.addToWatchlist = (req, res) => {
  const { userId } = req.auth; 
  const { filmId } = req.body;

  User.addToWatchList(userId, filmId, (result) => {
    res.json(result);
  });
};


exports.removeFromWatchlist = (req, res) => {
  const { userId } = req.auth; 
  const { filmId } = req.params;

  User.removeFromWatchList(userId, filmId, (result) => {
    res.json(result);
  });
};

