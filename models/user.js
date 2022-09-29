const {DataTypes} = require('sequelize')

function UserModel(sequelize){
    return sequelize.define('User', {
        username: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING,
        }
    },{
        timestamps: false 
    }
    )
}


module.exports = {
    UserModel
}