const express = require('express')
const app = express()

const path = require('path')
const basePath = path.join(__dirname, 'templates')

app.use(express.urlencoded({
    extended:true
}))

