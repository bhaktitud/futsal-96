const router = require ('express').Router() ;
const UserController = require ('../controllers/UserController') ;

router.get ('/' , UserController.findAll);
router.get ('/login', UserController.showLoginPage)
router.post ('/login', UserController.login)
router.get ('/register' , UserController.showAddPage);
router.post ('/register' , UserController.create);
router.get ('/edit/:id' , UserController.showEditPage);
router.post ('/edit/:id' , UserController.update);
router.get ('/delete/:id' , UserController.destroy);

module.exports = router