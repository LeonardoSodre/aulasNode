const exp = require('constants')
const express = require('express')
const app = express()

const path = require('path')
const basePath = path.join(__dirname, 'templates')

app.use(express.urlencoded({
    extended:true
}))

app.use(express.json())

app.use(express.static('public'))

app.post('/index', (req, res) =>{
    
})

app.get('/', (res, res) =>{
    res.sendFile(`${basePath}/index.html `)
})

app.listen(5000)