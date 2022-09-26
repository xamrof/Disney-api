const router = require('express').Router();

const character = require('./characters.routes')
const movie = require('./movies.routes')

router.use('/characters', character)
router.use('/movies', movie)


module.exports = router