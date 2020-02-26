const router = require('express').Router()
const customerController = require('../controllers/customerController')

router.get('/customer', customerController)

module.exports = router