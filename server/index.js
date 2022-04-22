'use strict'
const express = require('express')
const app = express();
const path = require('path');

app.get('/home',(req, res) => {
  res.send('<h1>hola</h1>');
})

//static files
app.use(express.static(path.join(__dirname, 'build')));
app.get('*', function(req, res) {
  console.log(path.join(__dirname, '../dist/list-tasks/', 'index.html'));
  res.sendFile( path.join(__dirname, '../dist/list-tasks/', 'index.html') )
});


const port = process.env.PORT || 3999;
app.listen(port, () => {
  console.log('servidor iniciado');
})
