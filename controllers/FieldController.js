const { Field } = require ('../models/index') ;

class FieldController {
    static findAll (req , res) {
        Field.findAll({
            order: ['id']
        })
            .then ((fields) => {
                res.render ( 'fields' , { fields } ) ;
            })
            .catch ( (err) => {
                res.send (err)
            })
    }
}

module.exports = FieldController