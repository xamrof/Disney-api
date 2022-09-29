
const {User, Character, Movie} = require('../db')


const emailExist = async (email = '') => {

    const existEmail = await  User.findOne({
        where: {
            email
        }
    })

    if(existEmail){
        throw new Error(`email ${email} is already registered`)
    }

}

const userIdExist = async(id) => {

    const idExist = await User.findByPk(id)

    if(!idExist){
        throw new Error (`the id ${id} not exist`)
    }
    
}

const characterIdExist = async(id) => {

    const idCharExist = await Character.findByPk(id)

    if(!idCharExist){
        throw new Error (`the id ${id} not exist`)
    }

}

const movieIdExist = async(id) => {

    const idMovieExist = await Movie.findByPk(id)

    if(!idMovieExist){
        throw new Error (`the id ${id} not exist`)
    }

}


module.exports = {
    emailExist,
    userIdExist,
    characterIdExist,
    movieIdExist
}