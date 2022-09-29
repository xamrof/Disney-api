const {DataTypes} = require('sequelize');

function MovieModel(sequelize) {
    return sequelize.define('Movie', {
        image: DataTypes.STRING,
        title: DataTypes.STRING,
        date: DataTypes.STRING,
        rating: DataTypes.INTEGER,
        genreName: DataTypes.STRING,
        chars:{ 
            type: DataTypes.ARRAY(DataTypes.STRING)
        }
    },{
        timestamps: false
    })
}

module.exports = {
    MovieModel
}
