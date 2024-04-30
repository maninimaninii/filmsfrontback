const requireAuth = (req, res, next) => {
    if (req.session.user) {
      next(); 
    } else {
      res.status(401).json({ message: 'Non autorisé' }); 
    }
  };
  
  module.exports = requireAuth;