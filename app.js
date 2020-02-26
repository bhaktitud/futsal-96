const routes = require('./routes/index')
const express = require('express')
const app = express()
const PORT = 3000; 


app.listen(PORT, () => {
    console.log(`app listen to : ${PORT}`);
})


app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended : true }))
app.use(express.static(__dirname + '/public'))
app.use(routes)