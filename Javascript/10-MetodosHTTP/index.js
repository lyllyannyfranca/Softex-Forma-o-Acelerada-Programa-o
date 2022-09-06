//import do express
const express = require('express')
const app = express()

// configuração para uso das rotas HTTP
const userRoute = require('./src/routes')
app.use('/', userRoute)

// inicialização do servidor na porta 3000
app.listen(3000, () => {
    console.log('Servidor rodando: http://localhost:3000')
})