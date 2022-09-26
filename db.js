const {Sequelize} = require('sequelize')

const {CharacterModel} = require('./models/character');
const {MovieModel} = require('./models/movie')
const {GenreModel} = require('./models/genre')


const sequelize = new Sequelize('disneyWorld', 'root', 'Kaguya.23', {
    host: 'localhost',
    dialect: 'mysql'
})

const Character = CharacterModel(sequelize)
const Movie = MovieModel(sequelize)
const Genre = GenreModel(sequelize)

Genre.hasMany(Movie,{
    foreignKey: 'genreId'
})

Movie.belongsTo(Genre)

Character.belongsToMany(Movie, {through: 'CharacterMovies'});
Movie.belongsToMany(Character, {through: 'CharacterMovies'});




module.exports = {
    sequelize,
    Character,
    Movie,
    Genre
}