const {DataTypes} = require('sequelize');

function GenreModel(sequelize){
    return sequelize.define('genre', {
        name: DataTypes.STRING,
        image: DataTypes.STRING,
    },{
        timestamps: false
    }
    )
}


module.exports = {
    GenreModel
}