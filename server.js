var express = require('express');  //access to entire express api

//create app
var app = express();

app.use(express.static('public'));  //which folder we wanna serve

app.listen(3000, function() {       //start server
  console.log('express server is up on port 3000')
});
