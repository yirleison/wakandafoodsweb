const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/wakandafoodsweb'));
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname +
    '/dist/wakandafoodsweb/index.html'));
});
app.listen(process.env.PORT || 8080);
console.log('Server runnig on port ', process.env.PORT || 8080);