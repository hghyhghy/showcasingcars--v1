


var express = require("express");
var router = express.Router();
const userModel = require("./users"); 
const passport = require("passport")
// for make the user login
const localstrategy = require("passport-local")
passport.use( new localstrategy(userModel.authenticate()))

/* GET home page. */
router.get("/", function (req, res) {
  res.render("index");
});

router.get("/profile",  isLoggedIn, function(req,res){
  res.render("profile")
})
// for make the user login 

router.post("/register", function(req,res){
 var userdata = new userModel({
  username :req.body.username,
  secret : req.body.secret
 })

userModel.register(userdata,req.body.password)
.then(function(registereduser){
  passport.authenticate("local")(req,res,function(){
    res.redirect('/profile')
  })
})
})

//  for making the user log in 
// using ocal strategy
router.post("/login",  passport.authenticate("local" , {
   successRedirect:"/profile",
   failureRedirect:"/",
   failureFlash:true
}),function(req,res){})

//  code for logout 

router.get("/logout", function(req,res,next){
   req.logOut(function(err){
    if(err) next(err)
    res.redirect("/")
   })
})

//  code for loggedin 
function isLoggedIn(req,res,next){
  // check wheather the user is logged in
  if(req.isAuthenticated()){   
    return next()
  }
  res.redirect("/")
}
// creating usermodel
router.get("/create", async function (req, res) {
  let userdata = await userModel.create({
    username: "Raipurna",
    nickname: "Rai",
    description: "she also loves me",
    catergories: ['fashion','life','science'],
  
  });
  res.send(userdata)
});

// case sensitive search in mongoose
router.get("/find", async function (req, res) {
  var  date1 = new Date('2024-03-02')
  var  date2 = new Date('2024-03-03')
  let user1 = await userModel.find({datecreated : { $gte :date1 , $lte :date2}});
  var regex = new RegExp("^Subham$","i")
  let user = await userModel.find({username:regex})
  
  res.send(user1)
});
// accessing the elements  having same categories
router.get("/find1", async function (req, res) {
  let user = await userModel.find({catergories:{ $all :['science'] }})
  res.send(user)
});

// filtering the elements having category field
router.get("/category", async function(req,res){
  let user = await userModel.find({catergories:{$exists :true}})
  res.send(user)
})
//  filtering elements with characters 
router.get("/character", async function(req,res){
  let user = await userModel.find({
    $expr:{
      $and:[
        {$gte : [{$strLenCP: '$nickname'},3]},
        {$lte : [{$strLenCP: '$nickname'},12]}
      ]
    }
  })
  res.send(user)
})

// use case of flash message
router.get("/failed", function (req, res) {
  req.flash("age", 20); 
  req.flash("name", "Subham");

  res.send("Done");
});

router.get("/check", function (req, res) {
  console.log(req.flash("age"));
  console.log(req.flash("name"));

  res.send("check in console");
});

module.exports = router;
