const router = require('express').Router()
const customerRouters = require('./customerRoutes')



router.get('/', (req, res)=>{
    res.render('home')
})
router.get('/register', (req, res)=> {
    res.render('register')
})

// router.get('/user/dashboard/')
// router.get('/booking')


module.exports = router