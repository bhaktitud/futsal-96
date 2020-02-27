const router = require ('express').Router() ;
const ReservationController = require ('../controllers/ReservationController') ;

router.get ('/' , ReservationController.findAll);
router.get ('/add' , (req, res, next) => {
        req.session.isLogin ? next() : res.redirect ('/')
    }, ReservationController.showAddPage);
router.post ('/add' , ReservationController.showAddPage2);
router.post ('/submit' , ReservationController.create);
// router.get ('/edit/:id' , ReservationController.showEditPage);
// router.post ('/edit/:id' , ReservationController.update);
// router.get ('/delete/:id' , ReservationController.destroy);

module.exports = router