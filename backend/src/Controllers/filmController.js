
const Film = require('../models/filmModel');

exports.getAllFilms = (req, res) => {
  Film.getAllF((films) => {
    res.json(films);
  });
};


exports.getAllSeries = (req, res ) => {
  Film.getAllS((films) =>{
    res.json(films);
  })
}


exports.getEntiteById = (req, res) => {
  const {id} = req.params;
  Film.getFilmById(id, (film) =>{
    res.json(film);
  })
}