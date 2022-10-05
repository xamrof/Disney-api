require('dotenv').config()


const express = require('express');

const app = express()

const apiRouter = require('./routes/api');

require('./db')
const {sequelize} = require('./db')

//MIDDLEWARES

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.use('/', apiRouter)


async function main(){
    try {
        await sequelize.sync({alter: false})
        console.log('Connection has been established successfully')
        app.listen(process.env.PORT)
    } catch (error) {
        console.error('Unable to connect to the database', error)
    }
}


main()