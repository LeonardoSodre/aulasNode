const express = require("express")
const exphbs = require("express-handlebars")

const app = express()

//Configurando o HandleBards com Template engine
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/',(req,res) =>{ 

    const usuario = {
    nome: "Leonardo",
    profissao: "Desenvolvedor",
    idade: 27
    }

    res.render('home' , {usuario}) 
})

app.listen(3030, () => {
    console.log('Servidor rodando na porta 3030')
})
