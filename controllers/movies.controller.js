const { request, response} = require('express')
const {Movie, Genre} = require('../db') 

const {Op} = require('sequelize');

const getMovies = async (req, res = response) => {

    const {name, genre, order = 'ASC'} = req.query

    if(name){
        const movie = await Movie.findOne({
            where: {
                title: name
            }
        })
        return res.json(movie)
    }
    if(genre){
        const movieGenre = await Movie.findAll({
            where:{
                genreId: genre
            },
            attributes: ['image', 'title', 'date']
        })
        if(movieGenre.length === 0){
            console.log(movieGenre)
            return res.status(404).json({msg: 'this genre does not exist'})
        }
        return res.json(movieGenre)
    }

    const movie = await Movie.findAll({
        attributes: ['image', 'title', 'date'],
        order: [['date', order]]
    });

    res.json(movie)

}

const getMovie = async (req = request, res) => {
    const {id} = req.params

    const movie = await Movie.findOne({
        where: {
            id
        },
        attributes: [
            "id",
            "image",
            "title",
            "date",
            "rating",
            "genreName",
            "chars"
        ]
    })


    //agregar validaciones con express-validator por si el id del personaje no existe

    res.json(movie)
}

const postMovie = async (req = request, res) => {

    // const movie = await Movie.create(req.body)

    const {genreName} = req.body

    const createMovie = await Movie.create(req.body)

    const {id} = await Genre.findOne({
        where: {
            name : genreName.toLowerCase()
        }
    })

    createMovie.set({
        genreId : id
    })

    await createMovie.save()
    
    res.json(createMovie)

}

const putMovie = async (req, res) => {

    const {id} = req.params

    try {
        const movie = await Movie.update(req.body,{
            where: {
                id
            }
        })
        if(!movie){
            res.status(404).json({
                msg: 'The movie you want to upgrade does no exist'
            })
        }
        res.json({msg: 'Movie updated!'})

    } catch (error) {
        res.stat
    }      

}

const deleteMovie = async (req, res) => {

  const {id} = req.params

  await Movie.destroy({
    where: {
        id
    }
  })

  res.json({
    msg: 'movie eliminated'
  })

}



module.exports = {
    getMovies,
    getMovie,
    postMovie,
    putMovie,
    deleteMovie


}