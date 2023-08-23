const fs = require('fs')

fs.readFile('frase.txt','utf8', (erro, dados) => {

    if(erro) {//Se o erro acontecer, mostramos
        console.log(erro)
        return
    }
    console.log(dados)  
}) 