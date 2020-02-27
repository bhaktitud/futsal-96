const { UserField, User, Field } = require ('../models/index') ;

class ReservationController {
    static findAll (req , res) {
        UserField.findAll({
            include : [User, Field],
            order: ['id']
        })
            .then ((userfields) => {
                res.send (userfields)
                // res.render ( 'reservations' , { userfields } ) ;
            })
            .catch ( (err) => {
                res.send (err)
            })
    }

    static showAddPage (req,res) {
        
        let errors = req.app.locals.errors || ""; 
        delete req.app.locals.errors ; 

        res.render ('bookingform', {errors : errors})
    }

    static showAddPage2 (req,res) {
        
        // let errors = req.app.locals.errors || ""; 
        // delete req.app.locals.errors ;
        
        // let dateBooked = new Date (req.body.dateBooked) ;
        let dateBooked = req.body.dateBooked
        let FieldId = Number(req.body.FieldId)

        UserField.findAll({
            where : {
                // dateBooked : dateBooked,
                FieldId : FieldId
            }
        })
            .then ( (userfields) => {
                let sessionReserved = [] ;
                for (let i = 0 ; i < userfields.length ; i++) {
                    sessionReserved.push(Number(userfields[i].session))
                }

                let allSession = [ 1, 2, 3, 4, 5, 6] ;

                for (let i = 0 ; i < allSession.length ; i++ ) {
                    for (let j = 0 ; j < sessionReserved.length ; j++){
                        if (sessionReserved[j] === allSession[i]) {
                            allSession.splice(i,1)
                        }
                    }
                }

                let sessionInHour = [] ;
                for (let i = 0 ; i < allSession.length ; i++){
                    if (allSession[i] === 1){
                        sessionInHour.push('12:00 - 13:00')
                    } else if (allSession[i] === 2){
                        sessionInHour.push('13:00 - 14:00')
                    } else if (allSession[i] === 3){
                        sessionInHour.push('14:00 - 15:00')
                    } else if (allSession[i] === 4){
                        sessionInHour.push('16:00 - 17:00')
                    } else if (allSession[i] === 5){
                        sessionInHour.push('18:00 - 19:00')
                    } else if (allSession[i] === 6){
                        sessionInHour.push('19:00 - 20:00')
                    }
                }
                res.render ('bookingform2' , {dateBooked, FieldId, allSession, sessionInHour})

            })
            .catch ( (err) => {
                res.send (err)
            })

        // res.render ('bookingform', {errors : errors})
    }

    static create (req,res) {
        let putId = req.session.insertId ;

        // console.log(req.body.session.length);


        for (let i = 0 ; i < req.body.session.length ; i++) {
            UserField.create ( {
                dateBooked : req.body.dateBooked,
                session : req.body.session[i],
                UserId : putId,
                FieldId : req.body.FieldId,
                createdAt : new Date(),
                updatedAt : new Date ()
            } )
        }

        res.redirect ('/reservations')
    }
}

module.exports = ReservationController