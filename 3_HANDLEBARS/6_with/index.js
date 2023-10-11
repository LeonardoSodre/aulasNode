const express = require("express")
const exphbs = require("express-handlebars")

const app = express()

//Configurando o HandleBards com Template engine
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

//rotas

app.get('/post', (req, res) =>{

    const post = {
        title:"Aprendendo Node JS",
        category: "JavaScript",
        body: "Este artigo vai te ajudar a aprender Node.JS",
        comments: 7
    }

    res.render('post', {post})
})


app.get('/dashboard', (req, res) =>{
    const items = ['Item a', 'Item b', 'Item c ']

res.render('dashboard', {items})
})

app.get('/',(req,res) =>{ 

    const usuario = {
    nome: "Leonardo",
    profissao: "Desenvolvedor",
    idade: 27
    }
    
    const compras = ["Banana", "Arroz", "Feijão", "Frango"]

    const auth = true

    res.render('home' , {usuario, auth}) 
})

app.listen(3030, () => {
    console.log('Servidor rodando na porta 3030')
})
