const express = require("express");
const app = express();

app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});

app.get("/page2",function(req,res){
  res.sendFile(__dirname+"/page2.html");
});

app.listen(3000,function(){
  console.log("Server is listening")
});
