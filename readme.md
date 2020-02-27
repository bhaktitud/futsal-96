npm init
npm i express ejs pg sequelize express-session
sequelize init
sequelize db:create
sequelize db:migrate
sequelize db:seed:all


Router compilation:
/fields
/users
/users/add
/users/edit/:id
/users/delete/:id
/reservation
/reservation/add
/reservation/edit/:id
/reservation/delete/:id