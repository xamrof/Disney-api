const router = require('express').Router();

const character = require('./characters.routes')
const movie = require('./movies.routes')
const register = require('./Auth/register.routes')
const login = require('./Auth/auth.routes')
const user = require('./Auth/user.routes')

const {validateJWT} = require('../middlewares/validate-jwt')
const {validateFields} = require('../middlewares/validate-fields')




router.use('/characters',[
    validateJWT,
    validateFields
], character)
router.use('/movies',[
    validateJWT,
    validateFields
], movie)

router.use('/auth/register', register)
router.use('/users', user)
router.use('/auth/login', login)


module.exports = router