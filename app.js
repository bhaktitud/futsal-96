const express = require ('express') ;
const app = express() ;
const session = require('express-session')
const PORT = 3000 ;
const routers = require ('./routers/index.js')

app.set ('view engine' , 'ejs');
app.use(express.urlencoded({ extended: true })) ;
app.use(express.static(__dirname + '/public')) ;

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true
}))

app.use ( routers );

app.listen (PORT, ()=> {
    console.log(`listening on port : ${PORT}`);
})
