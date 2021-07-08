const { Category, Product } = require('../db/models')

// Testing request
const getAll = async (req, res) => {
    try {
        const result = await Category.findAll()

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

const getCategoryWithProducts = async (req, res) => {
    try {
        const result = await Category.findAll({
            include: [
                {
                    model: Product,
                    as: 'products'
                 }
            ]
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
    getAll,
    getCategoryWithProducts
}