const router = require('express').Router();

const character = require('./characters.routes')
const movie = require('./movies.routes')
const user = require('./Auth/user.routes')
const login = require('./Auth/auth.routes')



router.use('/characters', character)
router.use('/movies', movie)
router.use('/auth/register', user)
router.use('/auth/login', login)


module.exports = router