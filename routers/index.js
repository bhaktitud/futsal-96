const router = require('express').Router() ;
const FieldRouter = require ('./FieldRouter') ;
const UserRouter = require ('./UserRouter') ;
const ReservationRouter = require ('./ReservationRouter') ;

router.use ('/fields', FieldRouter) ;
router.use ('/users' , UserRouter) ;
router.use ('/reservations' , ReservationRouter) ;


module.exports = router