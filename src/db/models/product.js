const Sequelize = require('sequelize');
const sequelize = require('../server');

const Product = sequelize.define('product', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING
    },
    url_image: {
        type: Sequelize.STRING
    },
    price: {
        type: Sequelize.FLOAT
    },
    discount: {
        type: Sequelize.INTEGER
    },
    category: {
        type: Sequelize.INTEGER
    }
});

// Product.associate = (models) => {
//     Product.hasOne(models.Category, { foreignKey: 'id', sourceKey: 'category' })
//   };

module.exports = Product;

