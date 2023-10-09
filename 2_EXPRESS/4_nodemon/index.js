const express = require('express')
const app = express()

const path = require('path')

const basePath = path.join(__dirname, 'templates')

app.get('/', (req, res) =>{
    res.sendFile(`${basePath}/index.html`) // TODA VEZ QUE VAI ENVIAR ARQUIVO USA-SE SendFile
})

app.listen(3000)

