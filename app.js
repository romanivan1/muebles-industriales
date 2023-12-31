const express = require('express');
const path = require('path')
const app = express();

app.use(express.static(path.resolve(__dirname,'./public')));

app.get('/', function(req,res){
    res.sendFile(path.resolve(__dirname,'./views/index.html'))
})

app.get('/login', function(req,res){
    res.sendFile(path.resolve(__dirname,'./views/login.html'))
})

app.get('/register', function(req,res){
    res.sendFile(path.resolve(__dirname,'./views/register.html'))
})

app.get('/product', function(req,res){
    res.sendFile(path.resolve(__dirname,'./views/product.html'))
})

app.get('/mesas', function(req,res){
    res.sendFile(path.resolve(__dirname,'./views/mesas.html'))
})

app.get('/escritorios', function(req,res){
    res.sendFile(path.resolve(__dirname,'./views/escritorios.html'))
})

app.get('/bibliotecas-estanterias', function(req,res){
    res.sendFile(path.resolve(__dirname,'./views/bibliotecas.html'))
})

app.get('/muebles-tv', function(req,res){
    res.sendFile(path.resolve(__dirname,'./views/mueblesTV.html'))
})

app.get('/mesas-ratonas', function(req,res){
    res.sendFile(path.resolve(__dirname,'./views/mesasRatonas.html'))
})

app.get('/bancos-jardin', function(req,res){
    res.sendFile(path.resolve(__dirname,'./views/bancosJardin.html'))
})

app.get('/productDetail', function(req,res){
    res.sendFile(path.resolve(__dirname,'./views/productDetail.html'))
})

app.get('/productCart', function(req,res){
    res.sendFile(path.resolve(__dirname,'./views/productCart.html'))
})

app.get('/about', function(req,res){
    res.sendFile(path.resolve(__dirname,'./views/about.html'))
})

app.get('/contact', function(req,res){
    res.sendFile(path.resolve(__dirname,'./views/contact.html'))
})

app.get('*', function(req,res){
    res.sendFile(path.resolve(__dirname,'./views/404.html'))
})

app.listen(3000, function(){
    console.log('listening on http://localhost:3000');
})