const roteador = require('express').Router()
const TabelaCliente = require('./tabelaCliente')
const Cliente = require('./Cliente')

roteador.get('/', async (requisicao, resposta) => {
    const resultados = await TabelaCliente.listAll()
    resposta.send(
        JSON.stringify(resultados)
    )
})

roteador.post('/', async (requisicao, resposta) => {
    const dadosRecebidos = requisicao.body
    const cliente = new Cliente(dadosRecebidos)
    await cliente.create()
    resposta.send(
        JSON.stringify(cliente)
    )
})

roteador.get('/:idCliente', async (requisicao, resposta) => {
    try
    {
        const id = requisicao.params.idCliente
        const cliente = new Cliente({id: id})
        await cliente.findById()
        resposta.send(
            JSON.stringify(cliente)
        )
    }
    catch(erro){
        resposta.send(
            JSON.stringify({
                mensagem: erro.message
            })
        )
    }
})

roteador.delete('/:idCliente', async (requisicao, resposta, proximo) => {
    try {
        const id = requisicao.params.idCliente
        const cliente = new Cliente({ id: id })
        await cliente.findById()
        await cliente.delete()
        resposta.status(204)
        resposta.end()
    } catch (erro) {
        proximo(erro)
    }
})

//TODO: Buscar por nome.
roteador.get('/:nomeCliente', async (requisicao, resposta) => {
    try
    {
        const nome = requisicao.params.nomeCliente
        const cliente = new Cliente({nome: nome})
        await cliente.findByName()
        resposta.send(
            JSON.stringify(cliente)
        )
    }
    catch(erro){
        resposta.send(
            JSON.stringify({
                mensagem: erro.message
            })
        )
    }
})

roteador.put('/:idCliente', async (requisicao, resposta) => {
    try
    {
        const id = requisicao.params.idCliente
        const dadosRecebidos = requisicao.body
        const dados = Object.assign({}, dadosRecebidos, {id: id})

        const cliente = new Cliente(dados)
        await cliente.update()
        resposta.end()
    }
    catch(erro){
        resposta.send(
            JSON.stringify({
                mensagem: erro.message
            })
        )
    }                           
})

module.exports = roteador