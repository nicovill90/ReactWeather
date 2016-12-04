var express = require('express');
var app = express();

app.use(express.static('public'));
app.listen(3000, function functionName() {
  console.log('Express up on port 3000');
});
