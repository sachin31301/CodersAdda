const express= require('express')

const route= express.Router()

const homecontroller=require('../controllers/home_controller')

console.log("I am called");

route.get('/',homecontroller.home);

module.exports= route;