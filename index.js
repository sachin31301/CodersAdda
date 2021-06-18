const express= require('express')


const app=express();
const port =8000

const expLayout=require('express-ejs-layouts')

const cookieParser=require('cookie-parser')

const db= require('./config/mongoose')
app.use(express.urlencoded());
app.use(cookieParser());
app.use(express.static('./assets'))
app.use(expLayout)
app.set('layout extractStyles',true)
app.set('layout extractScripts',true)

app.use('/',require('./routes'))

app.set('view engine', 'ejs')
app.set('views','./views')

app.listen(port,(err)=>{
    if(err)
    console.log(err);
    
})