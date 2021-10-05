const Sequelize = require('sequelize')

const instancia = require('../../banco-de-dados')

const colunas = {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    genero: {
        type: Sequelize.ENUM('Masculino', 'Feminino', 'Outro', 'Prefiro não dizer'),
        allowNull: false
    },
    data_nascimento: {
        type: Sequelize.DATE,
        allowNull: false
    },
    idade: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cidade_cliente: {
        type: Sequelize.STRING,
        allowNull: false
    },
}
const opcoes = {
    freezeTableName: true,
    tableName: 'clientes'
}

module.exports = instancia.define('cliente', colunas, opcoes)