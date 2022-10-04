const router = require('express').Router()

const {check} = require('express-validator')
const {validateFields} = require('../middlewares/validate-fields')
const {validateJWT} = require('../middlewares/validate-jwt')
const {movieIdExist} = require('../helpers/db-validators')

const {
    getMovies,
    getMovie,
    postMovie,
    putMovie,
    deleteMovie
} = require('../controllers/movies.controller')


router.get('/',[
    validateJWT,
    validateFields
], getMovies)


router.get('/:id',[
    validateJWT,
    check('id').custom(movieIdExist),
    validateFields
], getMovie)


router.post('/',[
    validateJWT,
    check('image', 'the image is not empty').not().isEmpty(),
    check('title', 'the title is not empty').not().isEmpty(),
    check('date', 'the date is not empty').not().isEmpty(),
    check('rating', 'the rating is not empty').not().isEmpty(),
    check('genreName', 'the genreName is not empty').not().isEmpty(),
    check('chars', 'the chars is not empty').not().isEmpty(),
    validateFields
], postMovie)


router.put('/:id',[
    validateJWT,
    check('id').custom(movieIdExist),
    validateFields
], putMovie)


router.delete('/:id',[
    validateJWT,
    check('id').custom(movieIdExist),
    validateFields
],deleteMovie)



module.exports = router