const Sequelize = require('sequelize');
const database = require('../server.js');
const Products = require('./product.js');

const Category = database.define('category', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING
    }
})

module.exports = Category;