const router = require('express').Router()
const { getAll, getCategoryWithProducts } = require('../controller/category.controller');

router.get('/', getAll)
router.get('/group', getCategoryWithProducts)

module.exports = router;