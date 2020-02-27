const router = require('express').Router() ;
const FieldRouter = require ('./FieldRouter') ;
const UserRouter = require ('./UserRouter') ;
const ReservationRouter = require ('./ReservationRouter') ;

router.get('/', (req, res) => {
    res.render('home', { isLogin: false })
})

// router.get('/users/login', (req, res) => {
//     res.render('login')
// })

router.use ('/fields', FieldRouter) ;
router.use ('/users' , UserRouter) ;
router.use ('/reservation' , ReservationRouter) ;


module.exports = router