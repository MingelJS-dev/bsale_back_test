const { getAll } = require('../controller/product.controller');
const router  = require('express').Router();

router.get('/', getAll)

module.exports = router;