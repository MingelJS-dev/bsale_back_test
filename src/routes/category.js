const router = require('express').Router()
const { getAll } = require('../controller/category.controller');

router.get('/', getAll)

module.exports = router;