const tabelaCliente = require('./tabelaCliente')
const TabelaCliente = require('./tabelaCliente')
class Cliente {
    constructor({id, nome, genero, data_nascimento, idade, cidade_cliente}) {
        this.id = id
        this.nome = nome
        this.genero = genero
        this.data_nascimento = data_nascimento
        this.idade = idade
        this.cidade_cliente = cidade_cliente
    }

    async create() {
        const resultado = await TabelaCliente.insert({
            nome: this.nome,
            genero: this.genero,
            data_nascimento: this.data_nascimento,
            idade: this.idade,
            cidade_cliente: this.cidade_cliente
        })

        this.id = resultado.id
    }

    async findById( ) {
        const encontrado = await TabelaCliente.getById(this.id)
        this.nome = encontrado.nome
        this.genero = encontrado.genero
        this.data_nascimento = encontrado.data_nascimento
        this.idade = encontrado.idade
        this.cidade_cliente = encontrado.cidade_cliente
    }

    async findByName( ) {
        const encontrado = await TabelaCliente.getByName(this.nome)
        this.nome = encontrado.nome
        this.genero = encontrado.genero
        this.data_nascimento = encontrado.data_nascimento
        this.idade = encontrado.idade
        this.cidade_cliente = encontrado.cidade_cliente
    }

    async update() {
        await TabelaCliente.getById(this.id)
        const campos = ['nome', 'genero', 'cidade_cliente']
        const dadosParaAtualizar = {}

        campos.forEach((campo) => {
            const valor = this[campo]
            if(typeof valor === 'string' && valor.length > 0) {
                dadosParaAtualizar[campo] = valor
            }
        })
        if(Object.keys(dadosParaAtualizar).length === 0){
            throw new Error('Não foram fornecidos dados para atualizar!')
        }
        await TabelaCliente.update(this.id, dadosParaAtualizar)
    }

    delete () {
        return TabelaCliente.delete(this.id)
    }
}

module.exports = Cliente