const express = require('express')
const app = express() //TUDO QUE FOR USAR DO EXPRESS USAREMOS APP

app.get('/', (requisicao, resposta) => { // ROTA ENVIAR INFORMAÇÃO PARA O NAVEGADOR
    resposta.send('Estou começando minha vida com o back-end') // ENVIAR A RESPOSTA
}) 

  app.listen(3000, () =>{
    console.log('App rodando na porta 3000')
  })
