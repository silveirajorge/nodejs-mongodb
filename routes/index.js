var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const arr = []

  for (let i = 0; i < 10; i++) {
    arr.push({
      id: 1,
      name: `Company ${i}`,
    });
  }
  
  res.render('index', { 
    title: 'Express Mongoose Handlebars',
    name: 'Jorge Silveira',
    data: arr
  });
});

module.exports = router;
