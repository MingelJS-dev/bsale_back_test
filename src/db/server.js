
const Sequelize = require('sequelize');

const database = new Sequelize(
    process.env.USER,
    process.env.PASSWORD,
    process.env.DB,
    {
        host: process.env.HOST,
        dialect: 'mysql',
        logging: false,
        define: {
            freezeTableName: true,
            timestamps: false
        }
    },

)

// database.sync();


module.exports = database;