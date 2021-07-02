const express = require('express');
const path = require('path');
const mongodb = require('./database/mongodbUtils.js') //call db
const app = express();
const port = 3000;

const home = require('./routes/home.js');
const pets = require('./routes/pets.js');


app.use(express.static('public')); // donde buscar archivos estaticos

app.use(express.urlencoded({extended:true}));//

mongodb.connect(err =>{
  if (err) console.error(err);
});


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'/views/home.html')); // unimos dos paths
});
// rutas
app.use('/home',home);
app.use('/pets',pets);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});