let express = require('express');
let router = require('./router');
let app = express();
app.use(express.json);
app.use('./api', router);
app.use((err, req, res, next) => {
  if (res.headerssent) return console.log(err);
  res.status
})
;

module.exports = app;
