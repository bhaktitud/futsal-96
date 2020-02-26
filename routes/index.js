const router = require('express').Router()
const customerRouters = require('./customerRoutes')



router.use(customerRouters)
router.use(customerRouters)


module.exports = router