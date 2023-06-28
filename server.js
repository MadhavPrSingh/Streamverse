const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const hbs = require("hbs");
const alert = require('alert');

require("./conn");

const Register = require("./reg");

const { json } = require("express");

const templatePath = path.join(__dirname + '/templates/views/');

const app = express();




app.use('/images', express.static(path.join(__dirname, 'Images')));
app.use('/images', express.static(path.join(__dirname, 'static')));
app.use('/images', express.static(path.join(__dirname, 'js')));
app.use('/static', express.static(path.join(__dirname, 'static')));
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/images', express.static(path.join(__dirname + "/loaderLogo.webp")));
app.use(express.static(__dirname + '/static'));
app.use(express.static(__dirname + '/js'));

app.use(express.json());
app.set("view engine","hbs");
app.set("views",templatePath);
app.use(express.urlencoded({extended:false}));



app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.get("/login.html", function(req, res){
    res.render("login");
});

app.post("/login", async (req, res) => {
    try{
      const email = req.body.email;
      const password = req.body.password;

      const useremail = await Register.findOne({email : email});

      if(useremail.password === password){
         res.status(201).render("home");
      }
      else{
        res.send("Username or Password is incorrect");
      }
    }catch(error){
      console.log(error);
    }
})

app.get("/home.html", function(req, res){
  res.render("home");
});

app.get("/anime.html", function(req, res){
  res.sendFile(__dirname + "/anime.html");
});

app.get("/movies.html", function(req, res){
  res.sendFile(__dirname + "/movies.html");
});

app.get("/web-series.html", function(req, res){
  res.sendFile(__dirname + "/web-series.html");
});

app.get("/premium.html", function(req, res){
  res.sendFile(__dirname + "/premium.html");
});

app.get("/contactus.html", function(req, res){
  res.sendFile(__dirname + "/contactus.html");
});

app.get("/signup.html", function(req, res){
  res.render("signup");
});

app.post("/register", async (req, res) => {
    try {
        const password = req.body.password;
        const confirmPassword = req.body.confirmPassword;
        if(password === confirmPassword){
          const reg = new Register({
              firstName : req.body.firstName,
              lastName : req.body.lastName,
              userName : req.body.userName,
              email : req.body.email,
              password : req.body.password,
              confirmPassword : req.body.confirmPassword
          });

          const register = await reg.save();
          res.status(201).render("login");

        }
        else{
          res.send("Password does not match!");
        }


    }catch(error){
        console.log(error);
    }
})


app.listen(3000, function(){
  console.log("Server is Running on port 3000");
});
