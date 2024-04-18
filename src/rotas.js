const express = require('express')
const cep = require('./controladores/cep')

const rotas = express()

rotas.get('/enderecos', cep.procurarCep)


module.exports = rotas