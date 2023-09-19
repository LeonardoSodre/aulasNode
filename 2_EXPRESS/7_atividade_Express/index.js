const express = require('express')
const app = express()

const path = require('path')
const basePath = path.join(__dirname, 'templates')

app.use(express.urlencoded({
    extended:true
}))

app.use(express.json())

app.use(express.static('public'))

app.post('/index/enviar', (req, res) =>{
    const nome = req.body.nome
    const email = req.body.email

    console.log(`
    Usuário: ${nome} 
    Email: ${email}
    `)

    res.redirect('/')
})

app.get('/', (req, res) =>{
    res.sendFile(`${basePath}/index.html `)
})

app.listen(5000)