const { request, response} = require('express')
const {Character} = require('../db')


const getCharacters = async (req = request, res) => {

    const {name, age, weight, movies} = req.query

    try {
        if(name){
            const character = await Character.findOne({
                where: {
                    name
                }
            })
            if(!character){
                return res.status(404).json({msg: `The Character ${character} does not exist in the database`})
            }
            return res.json(character)
        }
        if(age){
            const character = await Character.findAll({
                where: {
                    age
                }
            })
            if(character.length === 0){
                return res.status(404).json({msg: `There are no characters of the age of ${age}`})
            }
            return res.json(character)
        }
        if(weight){
            const character = await Character.findAll({
                where: {
                    weight
                }       
            })
            if(character.length === 0){
                return res.status(404).json({msg: `There are no characters with a weight of ${weight}`})
            }
            return res.json(character)
        }

        const character = await Character.findAll({
            attributes: ['name', 'image']
        });
    
        res.json(character)    
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
    
}

const getCharacter = async(req, res) => {

    
    const {id} = req.params

    try {
        
        const character = await Character.findOne({
            where: {
                id
            }
        })
        res.json(character)

    } catch (error) {
        return res.status(500).json({msg: error})
    }

}

const postCharacter = async (req, res) => {

    const character = await Character.create(req.body);
    res.json(character)

}


const putCharacter = async (req = request, res = response) => {

    try {
        const character = await Character.update(req.body, {
            where: {id: req.params.id}
        })
        res.json({
            msg: 'Updated!!'
        })    
    } catch (error) {
        return res.status(500).json({Failed: error})
    }
    
}

const deleteCharacter = async (req, res) => {

    const {id} = req.params

    try {
        const characterDelete = await Character.destroy({
            where: {
                id
            }
        })
        res.json({
            msg: 'deleted character'
        })
    } catch (error) {
        return res.status(500).json({
            msg: error
        })
    }
}

module.exports = {
    getCharacters,
    getCharacter,
    postCharacter,
    putCharacter,
    deleteCharacter
}
