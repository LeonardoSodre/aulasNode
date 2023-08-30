const express = require('express')
const app = express()

const path = require('path')
const basePath = path.join(__dirname, 'templates')

//MIDDLEWARE - RECEBER INFORMAÇÕES DO CORPO DA REQUISIÇÃO
app.use(express.urlencoded({
    extended:true
})) 

//CONVERTER OBJETO
app.use(express.json())

// MIDDLEWARE - UTILIZAR ARQUIVOS ESTÁTICOS COMO CSS, IMAGENS 
app.use(express.static('public'))

app.post('/usuarios/enviar', (req, res) =>{
    const nome = req.body.nome
    const email = req.body.email

    console.log(`
    Usuário: ${nome} 
    Email: ${email}
    `)

    res.redirect('/')
})

app.get('/usuarios/cadastrar', (req, res) =>{
    res.sendFile(`${basePath}/form.html`)
})

app.get('/usuarios/:id', (req, res) => {
    const id = req.params.id

    console.log(`Usuários: ${id}`)

    res.sendFile(`${basePath}/usuarios.html`)   
})

app.get('/', (req, res) =>{
    res.sendFile(`${basePath}/index.html`) // TODA VEZ QUE VAI ENVIAR ARQUIVO USA-SE SendFile
})

app.listen(3000)
