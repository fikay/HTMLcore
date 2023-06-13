const express = require('express');
const app = express();
const ejsMate = require('ejs-mate')
const mongoose = require('mongoose')
const path = require('path');

app.engine('ejs', ejsMate)
app.set('views', path.join(__dirname, 'views') );
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, "images")));

app.listen(3000, ()=>{
    console.log('here')
})

app.get('/homepage',(req,res)=>{
    res.render('restaurant/homePage')
})

app.get('/menu', (req,res)=>{
    res.render('restaurant/menuPage')
})