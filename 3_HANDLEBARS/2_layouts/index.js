const express = require("express")
const exphbs = require("express-handlebars")

const app = express()

//Configurando o HandleBards com Template engine
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/',(req,res) =>{ //rota padrão para o usuario que acessar a pagina
    res.render('home') 
})

app.listen(3030, () => {
    console.log('Servidor rodando na porta 3030')
})
