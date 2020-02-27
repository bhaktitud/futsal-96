const router = require ('express').Router() ;
const UserController = require ('../controllers/UserController') ;

router.get ('/' , UserController.findAll);
router.get ('/add' , UserController.showAddPage);
router.post ('/add' , UserController.create);
router.get ('/edit/:id' , UserController.showEditPage);
router.post ('/edit/:id' , UserController.update);
router.get ('/delete/:id' , UserController.destroy);
router.get ('/login', UserController.showLoginPage) ;
router.post ('/login', UserController.login) ;


module.exports = router