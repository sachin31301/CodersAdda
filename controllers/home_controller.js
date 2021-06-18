module.exports.home= function(req,res){

  console.log(req.cookies);

  res.cookies('user',20)

  return res.render('home',{
      title:"My Home"
  })
}