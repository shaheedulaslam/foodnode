var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next){
if(req.session.index){
  res.redirect('/home')
}else{
    res.render('index',{Err:req.session.indexerror});
    req.session.indexerror=false
  }
 
});

let email= "shaheedulaslam061@gmail.com";
let pass = "1234";
 router.post('/home',function(req,res,next){
  console.log(req.body)
  const emailDb=req.body.email
  const password=req.body.password
  if( emailDb=== email && password === pass){
    req.session.index=true
    res.redirect('/home')
    console.log('login successful');
  }else{
    req.session.indexerror=true
    res.redirect('/');
    console.log('login failed');
  }
 })

router.get('/logout',(req,res)=>{
  req.session.destroy()
  res.redirect('/')
  
})

module.exports = router;



