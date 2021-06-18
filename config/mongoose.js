const mongoose= require('mongoose')

mongoose.connect('mongodb://localhost/Codeial_development')

const db= mongoose.connection

db.on('error',console.error.bind(console,"my error"))

db.once('open',function(){
    console.log("my db started");
})

module.exports=db;