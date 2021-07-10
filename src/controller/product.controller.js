const { Product, Category } = require('../db/models')

// Testing postman request
const getAll = async (req, res) => {
    try {
        const { limit = 6, offset = 0 } = req.query
        const result = await Product.findAndCountAll({
            limit,
            offset
        })

        res.status(201).json({
            result
        })
    } catch (error) {
        res.status(400).json({
            error
        })
        console.log('Error', error);
    }
}

module.exports = {
    getAll
}