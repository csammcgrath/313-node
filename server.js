const path = require('path')
const express = require('express')
const bodyParser = require('body-parser');
const postOffice = require('./files/postal');

const PORT = process.env.PORT || 8888;

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .get('/', (req, res) => res.sendFile(path.join(__dirname, '/public/postal.html')))
  .get('/postal', (req, res) => res.sendFile(path.join(__dirname, '/public/postal.html')))
  .post('/getPostalRate', (req, res) => postOffice.rexburgOffice(req, res))
  .listen(PORT, () => console.log(`Listening on ${PORT}`))