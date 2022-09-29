const {DataTypes} = require('sequelize');

function CharacterModel(sequelize)  {
   return sequelize.define('Character', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: DataTypes.STRING,
        image: {
            type: DataTypes.STRING
        },
        age: {
            type: DataTypes.INTEGER
        },
        weight: {
            type: DataTypes.INTEGER
        },
        History: {
            type: DataTypes.STRING(256)
        },
        CharMovies: {
            type: DataTypes.ARRAY(DataTypes.STRING)
        }

    },{
        timestamps: false
    }
    )
} 

module.exports ={
    CharacterModel
}