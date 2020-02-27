const router = require ('express').Router() ;
const FieldController = require ('../controllers/FieldController') ;

router.get ('/' , FieldController.findAll);

module.exports = router