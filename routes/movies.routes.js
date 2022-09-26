const router = require('express').Router()

const {
    getMovies,
    getMovie,
    postMovie,
    putMovie,
    deleteMovie
} = require('../controllers/movies.controller')



router.get('/', getMovies)
router.get('/:id', getMovie)
router.post('/', postMovie)
router.put('/:id', putMovie)
router.delete('/:id', deleteMovie)



module.exports = router