const Modelo = require('./ModeloTabelaCliente')

module.exports = {
    listAll() {
        return Modelo.findAll()
    },

    insert(cliente){
        return Modelo.create(cliente)
    },
    
    async getById(id){
        const encontrado = Modelo.findOne({
            where: {
                id: id
            }
        })
        if(!encontrado){
            throw new Error('Cliente não encontrado!')
        }

        return encontrado
    },

    async getByName(nome){
        const encontrado = Modelo.findOne({
            where: {
                nome: nome
            }
        })
        if(!encontrado){
            throw new Error('Cliente não encontrado!')
        }

        return encontrado
    },

    async update(id, dadosParaAtualizar){
        return Modelo.update(
            dadosParaAtualizar,
            {
                where: {
                    id: id
                }
            }
        )
    },

    delete (id) {
        return Modelo.destroy({
            where: { id: id }
        })
    }
}