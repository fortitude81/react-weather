var express = require('express');  //access to entire express api

//create app
var app = express();
const PORT = process.env.PORT || 3000;  //now heroku can pass to the PORT


//express middleware, direct https traffic to http
app.use(function(req, res, next) {
  if(req.protocol === 'http') {
    next();  //request process, return file to browser
  }else{
    res.redirect('http://' + req.hostname + req.url); //redirect here
  }
});

app.use(express.static('public'));  //which folder we wanna serve

app.listen(PORT, function() {       //start server
  console.log('express server is up on port ' + PORT);
});
