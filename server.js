//jshint esversion:6

const express= require("express");

const app = express();

app.get("/", function(req, res){
  res.send("<h1>Hello</h1>");
})

app.get("/contact", function(req, res){
  res.send("conatc me @ gmail.com");
})

app.get("/about", function(req, res){
  res.send("<h1>Narsa </h1>  <p>softwear</p> ")
})
app.get("/list", function(req, res){
  res.send("hey there")
})
app.listen(3000, function(){
  console.log("server started");
})
