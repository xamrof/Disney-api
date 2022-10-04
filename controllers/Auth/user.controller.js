const {User} = require('../../db')
const bcryptjs = require('bcryptjs')
const {response, request} = require('express')
const {sendMail} = require('../../helpers/sendmail')


const getUser = async (req, res) => {

    const user = await User.findAll({
        attributes: [
            "username",
            "email",
            "password"
        ]
    });

    res.json(user)

}

const postUser = async (req = request, res = response) => {

    const {username, email, password} = req.body
    const user = await User.create({username, email, password})

    //Encrypt the password
    const salt = bcryptjs.genSaltSync();
    user.password = bcryptjs.hashSync(password, salt)

    await user.save()

    // await sendMail(email)

    res.json(user)

}

const putUser = async(req, res) => {

    const {id ,email, password, ...rest} = req.body

    if(password){
        const salt = bcryptjs.genSaltSync();
        rest.password = bcryptjs.hashSync(password, salt)
    }

    try {
       const user =  await User.update(rest, {
            where: {
                id: req.params.id
            }
        })
        res.json({
            msg: "user updated!",
            user
        })        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'updated failed'
        })
    }


}

const deleteUser = async (req, res) => {

    const {id} = req.params

    try {
        
        await User.destroy({
            where: {
                id
            }
        })

        res.json({
            msg: 'user deleted successfully'
        })

    } catch (error) {
        console.log(error)
        res.json(500).json({
            msg: 'deleted failed'
        })
    }

}


module.exports = {
    getUser,
    postUser,
    putUser,
    deleteUser
}