const MovieSchema = require('../models/Movie.js');
const Rating = require("../models/Rating");

module.exports.controller = (app) => {
  // add a new movie
  app.get('/movies', (req, res) => {
    MovieSchema.find({}, 'name description release_year genre', (err, movies) =>{
      if(err){console.log(err);}
      res.send({movies,});
    });
  });

  app.get('/api/movies/:id', (req, res) =>{
    MovieSchema.findById(req.params.id, 'name description release_year genre', (err, movie) =>{
      if(err){console.error(err);}
      res.send(movie);
    });
  });

  app.post('/movies', (req, res) => {
    const newMovie = new MovieSchema({
      name: req.body.name,
      description: req.body.description,
      release_year: req.body.release_year,
      genre: req.body.genre,
    });

    newMovie.save((error, movie) => {
      if (error) { console.log(error); }
      res.send(movie);
    });
  });

  app.post('/movies/rate/:id', (req, res) => {
    const rating = new Rating({
      movie_id: req.params.id,
      //user.id: req.body.user_id,
      rate: req.body.rate,
    });

    rating.save(function (error, rating){
      if(error) {console.log(error);}
      res.send({
        movie_id: rating.movie_id,
        //user_id: rating.user_id,
        rate: rating.rate
      });
    });
  });
};
