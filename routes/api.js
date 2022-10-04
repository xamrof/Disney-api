const router = require('express').Router();

const character = require('./characters.routes')
const movie = require('./movies.routes')
const register = require('./Auth/register.routes')
const login = require('./Auth/auth.routes')
const user = require('./Auth/user.routes')



router.use('/characters', character)
router.use('/movies', movie)
router.use('/auth/register', register)
router.use('/users', user)
router.use('/auth/login', login)


module.exports = router