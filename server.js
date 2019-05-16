var path = require('path');
var express = require('express');

var app = express();
let digital = require('./routes/digitalassistant');

app.use('/digital', digital);
var staticPath = path.join(__dirname, '/app');
app.use(express.static(staticPath));


app.listen(3000, function() {
  console.log('listening on port 3000');
});
