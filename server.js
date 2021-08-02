import express from 'express';
import bodyParser from 'body-parser';
import React from 'react';
import path from 'path';
import webpack from 'webpack';
import helmet from 'helmet';

import svg from './svgdemo/app';


var BUILD_DIR = path.join(__dirname, '/src/frontend/public/');
let app = express();

const port = 8888;

//app.use(helmet());

app.get('/index.html', (req, res) => {
  res.redirect('/');
});

app.use( express.static(path.join(BUILD_DIR))); 

app.use('/*/js/bundle.js', (req,res) => {
  res.sendFile(path.join(BUILD_DIR, 'js/bundle.js'));
});

app.get('/fayeboo', (req, res) => {
  res.sendFile(path.join(__dirname, '/Fayeboo/app/build/index.html'));
});

app.use('/fayeboo/static',express.static(path.join(__dirname, '/Fayeboo/app/build/static')));

app.get('/pendulum', (req, res) => {
  res.sendFile(path.join(__dirname, '/pendulum/processing.html'));
});

app.get('/processing.js', (req, res) => {
  res.sendFile(path.join(__dirname, '/pendulum/processing.js'));
});

app.get('/pendulum.js', (req, res) => {
  res.sendFile(path.join(__dirname, '/pendulum/pendulum.js'));
});

app.get('/', (req, res) => {
  console.log('someone showed');
  res.sendFile(path.join(BUILD_DIR, 'index.html'));
});
 
app.get('/api/:who', (req, res) => {
  res.send('you made it to ' + req.params.who);
});

app.get('/resources/resume', (req, res) => {
  res.sendFile(path.join(__dirname, '/Resume/resume-base.pdf'));
});

app.get('/resources/socket.io.js', (req, res) => {
  res.sendFile(path.join(__dirname, '/chatbox/node_modules/socket.io-client/dist/socket.io.js'));
});

app.use((req, res) => {
  console.log('default');
  res.sendFile(path.join(BUILD_DIR, 'index.html'));
});

app.listen(port, (error) => {
  if(error){
    console.log(error);
  }
  else{
   console.log('We are live on ' + port);
  }
});
