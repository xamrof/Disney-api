const router = require('express').Router();

const {check} = require('express-validator')
const {validateFields} = require('../middlewares/validate-fields')
const {characterIdExist} = require('../helpers/db-validators')


const {
    getCharacters,
    getCharacter,
    postCharacter,
    putCharacter,
    deleteCharacter
} = require('../controllers/characters.controller')



router.get('/',getCharacters)

router.get('/:id',[
    check('id').custom(characterIdExist),
    validateFields
], getCharacter)

router.post('/',[
    check('name', 'the name is not empty').not().isEmpty(),
    check('image', 'the image is not empty').not().isEmpty(),
    check('age', 'the age is not empty').not().isEmpty(),
    check('weight', 'the weight is not empty').not().isEmpty(),
    check('History', 'the History is not empty').not().isEmpty(),
    check('CharMovies', 'the CharMovies is not empty').not().isEmpty(),
    validateFields
], postCharacter)

router.put('/:id',[
    check('id').custom(characterIdExist),
    validateFields
], putCharacter)

router.delete('/:id',[
    check('id').custom(characterIdExist),
    validateFields
], deleteCharacter)



module.exports = router