const {User} = require('../../db')
const bcryptjs = require('bcryptjs')
const {response, request} = require('express')



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

    res.json(user)

}


module.exports = {
    getUser,
    postUser
}