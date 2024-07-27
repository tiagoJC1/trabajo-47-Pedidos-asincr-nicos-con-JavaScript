const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');


//Aqui tienen otra forma de llamar a cada uno de los modelos
const Movies = db.Movie;
const Genres = db.Genre;
const Actors = db.Actor;

const favoriteAPIController = {
    list: (req, res) => {
        db.Favorite.findAll()
        .then(Favorite => {
            let respuesta = {
                meta: {
                    status : 200,
                    total: Favorite.length,
                    url: 'api/favorite'
                },
                data: Favorite
            }
                res.json(respuesta);
            })
    },
}

module.exports = favoriteAPIController;