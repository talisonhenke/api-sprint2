const express = require('express')
const app = express()

const config = require('config')

const bodyParser = require('body-parser')

app.use(bodyParser.json())

const roteador = require('./rotas/clientes')
app.use('/api/clientes', roteador)

app.listen(config.get('api.porta'), () => console.log('A api está funcionando!'))