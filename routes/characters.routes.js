const router = require('express').Router();

const {
    getCharacters,
    getCharacter,
    postCharacter,
    putCharacter,
    deleteCharacter
} = require('../controllers/characters.controller')



router.get('/', getCharacters)
router.get('/:id', getCharacter)
router.post('/', postCharacter)
router.put('/:id', putCharacter)
router.delete('/:id', deleteCharacter)



module.exports = router