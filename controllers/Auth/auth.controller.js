const {response} = require('express')

const {generateJWT} = require('../../helpers/generate-jwt')
const bcryptjs = require('bcryptjs')
const {User} = require('../../db')



const login = async (req, res = response) => {

    const {email, password} = req.body

    try {

        const user = await User.findOne({
            where: {
                email
            }
        })

        if(!user){
            return res.status(400).json({
                msg: 'the email are not correct'
            })
        }

        const validPassword = bcryptjs.compareSync(password, user.password)
        if(!validPassword){
            return res.status(400).json({
                msg: 'The password are not correct'
            })
        }

        const token = await generateJWT(user.id)

        

        res.json({
            user,
            token
        })
      

    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'talk with the administrator'
        })
    }

}



module.exports = {
    login
}