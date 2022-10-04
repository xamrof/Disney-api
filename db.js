const {Sequelize} = require('sequelize')

const {CharacterModel} = require('./models/character');
const {MovieModel} = require('./models/movie')
const {GenreModel} = require('./models/genre')
const {UserModel} = require('./models/user')


const sequelize = new Sequelize('DisneyWorld', 'postgres', process.env.PASSWORD, {
    host: 'localhost',
    dialect: 'postgres'
})

const Character = CharacterModel(sequelize)
const Movie = MovieModel(sequelize)
const Genre = GenreModel(sequelize)
const User = UserModel(sequelize)

Genre.hasMany(Movie,{
    foreignKey: 'genreId'
})

Movie.belongsTo(Genre)


module.exports = {
    sequelize,
    Character,
    Movie,
    Genre,
    User
}