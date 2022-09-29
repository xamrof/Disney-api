const { login } = require('../../controllers/Auth/auth.controller');
const {check} = require('express-validator')
const {validateFields} = require('../../middlewares/validate-fields')

const router = require('express').Router();


router.post('/',[
    check('email', 'invalid email format').isEmail(),
    check('email', 'the email is required').not().isEmpty(),
    check('password', 'the password is required').not().isEmpty(),
    validateFields
],login)



module.exports = router