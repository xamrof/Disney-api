const router = require('express').Router();

const {validateJWT} = require('../middlewares/validate-jwt')

const {
    getCharacters,
    getCharacter,
    postCharacter,
    putCharacter,
    deleteCharacter
} = require('../controllers/characters.controller')



router.get('/',[
    validateJWT
], getCharacters)

router.get('/:id',[
    validateJWT
], getCharacter)

router.post('/',[
    validateJWT
], postCharacter)


router.put('/:id',[
    validateJWT
], putCharacter)

router.delete('/:id',[
    validateJWT
], deleteCharacter)



module.exports = router