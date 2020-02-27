const { User } = require ('../models/index') ;

class UserController {
    static findAll (req , res) {
        User.findAll({
            order: ['id']
        })
            .then ((users) => {
                res.render ( 'users' , { users } ) ;
            })
            .catch ( (err) => {
                res.send (err)
            })
    }

    static showAddPage (req,res) {
        
        let errors = req.app.locals.errors || ""; 
        delete req.app.locals.errors ; 

        res.render ('signupform', {errors : errors})
    }

    static create ( req , res ) {
        User.create (req.body)
        .then ( () => {
            res.redirect ('/users')
        })
        .catch ( (err) => {
            let errors = err.errors;
            req.app.locals.errors = errors ;
            res.redirect (`/users/add`) ;
        })
    }   

    static showEditPage ( req , res ) {

        let errors = req.app.locals.errors || ""; 
        delete req.app.locals.errors ; 

        User.findByPk ( Number(req.params.id) )
            .then ( (users) => {
                let editUser = users.dataValues ;
                res.render ('edituser' , {editUser, errors : errors})
            })
            .catch ( (err) => {
                res.send ('ID not found')
            })
    }

    static update ( req, res) {

        req.body.updatedAt = new Date() ;
        let idToEdit = Number(req.params.id)

        User.update ( req.body , {
            where : {
                id : idToEdit
            }
        })
            .then ( () => {
                res.redirect ('/users')
            })
            .catch ( (err) => {
                let errors = err.errors ;
                req.app.locals.errors = errors ;
                res.redirect (`/users/edit/${idToEdit}`)              
            })   
    }

    static destroy (req, res) {

        User.findByPk ( Number(req.params.id) )
            .then ( (users) => {   
                return User.destroy ( { where : { id : Number(req.params.id) }}) })

            .then (() => {
                res.redirect ('/users') ;
            })   
            
            .catch ( (err) => {
                res.send (err)
            })
    }

    static showLoginPage (req,res){
        res.render ('login')
    }

    static login (req,res){
        let usernameCheck = req.body.username ;
        let passwordCheck = req.body.password ;

        User.findAll ( {
            where : {
                username : usernameCheck
            }
        })
            .then ( (users) => {
                if (users[0].dataValues.password === passwordCheck){
                    req.session.isLogin = true ;
                    req.session.insertId = users[0].dataValues.id
                    res.redirect ('/')
                } else {
                    req.session.isLogin = false ;
                    throw ''
                }
            })
            .catch ( (err) => {
                res.redirect('/users/login')
            })

    }
}

module.exports = UserController