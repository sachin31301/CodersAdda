 const User=require('../models/user')

module.exports.profile= function(req,res){
    return res.render('user',{
      title:"Codeial"
    })
  }

  module.exports.usersignup= function(req,res){
    return res.render('user_signup',{
      title:"Codeial"
    })
  }

  module.exports.usersignin= function(req,res){
    return res.render('user_signin',{
      title:"Codeial"
    })
  }

  module.exports.create=(req,res)=>{
        if(req.body.password!=req.body.confirm_password){
          return res.redirect('back');
        }
        User.findOne({email:req.body.email},(err,user)=>{
          if(err)
          console.log("error");
          if(!user){
            User.create(req.body,(err,user)=>{
              if(err)
              console.log("user");
              return res.redirect('/user/signin')
            }
            )
          }
          else{
            return res.redirect('back')
          }
        })
  }

  module.exports.create_session=(req,res)=>{

  }