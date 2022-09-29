const {request, response} = require('express')
const jwt = require('jsonwebtoken')
const {User} = require('../db') 

const validateJWT = async (req = request, res = response, next) => {

    const token = req.header('set-token');

    if(!token){
        return res.status(401).json({
            msg: 'no token in the request'
        })
    }

    try {
        
        const {uid} = jwt.verify(token, process.env.SECRETORPRIVATEKEY)

        const user = await User.findByPk(uid)

        //reading the user of the id
        if(!user){
            return res.status(401).json({
                msg: 'Invalid token - user not exist in DB'
            })
        }
        
        req.user = user
        next();

    } catch (error) {
        console.log(error)
        res.status(401).json({
            msg: 'Invalid token'
        })
    }

}

module.exports = {
    validateJWT
}