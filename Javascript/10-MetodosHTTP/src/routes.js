//import do express
const express = require('express')
const router = express.Router()

//rota get
router.get('/test', (req, res) => {
    res.send(`<h1>Método GET testado com sucesso!</h1>`)
})

//rota post
router.post('/test', (req, res) => {
    res.send(`<h1>Método POST testado com sucesso!</h1>`)
})

// rota put
router.put('/test/:id', (req, res) => {
    res.send(`<h1>Método PUT testado com sucesso com o id passado: ${req.params.id}</h1>`)
})

// rota delete
router.delete('/test/:id', (req, res) => {
    res.send(`<h1>Método DELETE testado com sucesso com o id passado: ${req.params.id}</h1>`)
})

/* exportação da variavel router para 
uso dos métodos HTTP no arquivo index.js */
module.exports = router;