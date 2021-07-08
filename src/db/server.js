
const Sequelize = require('sequelize');

const database = new Sequelize(
    'bsale_test',
    'bsale_test',
    'bsale_test',
    {
        host: 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
        dialect: 'mysql',
        define: {
            freezeTableName: true,
            timestamps: false
        }
    },

)

// database.sync();


module.exports = database;