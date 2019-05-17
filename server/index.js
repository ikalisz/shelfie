require('dotenv').config()
const express = require('express')
const app = express()
const massive = require('massive')

const {SERVER_PORT, CONNECTION_STRING} = process.env

massive(CONNECTION_STRING, {strings: __dirname + '/db'})
.then(database => {
    app.set('db', database)
    console.log('Database connected')
    app.listen(SERVER_PORT, () => {
        console.log(`Working on port ${SERVER_PORT}`)
    })
})
.catch(err => {
    console.log(err)
})