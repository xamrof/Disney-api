const router = require('express').Router()

const {check} = require('express-validator')
const {validateFields} = require('../../middlewares/validate-fields')


const {
    postUser
} = require('../../controllers/Auth/user.controller')


router.post('/',[
    check('username', 'the username is required').not().isEmpty(),
    check('password', 'the password must be no longer than 6 letters').isLength({min: 6}),
    check('email','the email format is invalid').isEmail(),
    validateFields
], postUser)




module.exports = router