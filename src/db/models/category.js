const Sequelize = require('sequelize');
const database = require('../server.js');
const Product = require('./product.js');

const Category = database.define('category', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING
    }
})

Category.hasMany(Product, {
    as: 'products',
    foreignKey: 'category',
    targetKey: "id"
})

module.exports = Category;