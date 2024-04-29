
const Film = require('../models/filmModel');

exports.getAllFilms = (req, res) => {
  Film.getAll((films) => {
    res.json(films);
  });
};
