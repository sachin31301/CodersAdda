const express= require('express')

const app=express();
const port =8000

const expLayout=require('express-ejs-layouts')
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