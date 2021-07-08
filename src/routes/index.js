const router = require('express').Router()
const categoryRouters = require('./category')
const productRouters = require('./product')

router.use('/categories', categoryRouters);
router.use('/products', productRouters);

module.exports = router;