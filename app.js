require('dotenv').config()


const express = require('express');

const app = express()
const port = 3000;

const apiRouter = require('./routes/api');

require('./db')
const {sequelize} = require('./db')

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.use('/', apiRouter)


async function main(){
    try {
        await sequelize.sync({alter: false})
        console.log('Connection has been established successfully')
        app.listen(port)
    } catch (error) {
        console.error('Unable to connect to the database', error)
    }
}


main()