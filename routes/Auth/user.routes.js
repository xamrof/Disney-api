const router = require('express').Router()

const {check} = require('express-validator')
const {validateFields} = require('../../middlewares/validate-fields')
const {userIdExist} = require('../../helpers/db-validators')


const {
    getUser,
    putUser,
    deleteUser
} = require('../../controllers/Auth/user.controller')


router.get('/', getUser)


router.put('/:id',[
    check('id').custom(userIdExist),
    validateFields
],putUser)


router.delete('/:id',[
    check('id').custom(userIdExist),
    validateFields
],deleteUser)



module.exports = router