
const app = require('./app');
require ('./dataBase')

app.listen(process.env.PORT || 3000, ()=>{console.log('Vivio el back')}) 