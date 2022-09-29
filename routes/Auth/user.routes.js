const router = require('express').Router()
const {check} = require('express-validator')
const {validateFields} = require('../../middlewares/validate-fields')
const {userIdExist} = require('../../helpers/db-validators')


const {
    getUser,
    postUser,
    putUser,
    deleteUser
} = require('../../controllers/Auth/user.controller')


router.get('/', getUser)


router.post('/',[
    check('username', 'the username is required').not().isEmpty(),
    check('password', 'the password must be no longer than 6 letters').isLength({min: 6}),
    check('email','the email format is invalid').isEmail(),
    validateFields
], postUser)


router.put('/:id',[
    check('id').custom(userIdExist),
    validateFields
],putUser)


router.delete('/:id',[
    check('id').custom(userIdExist),
    validateFields
],deleteUser)



module.exports = router