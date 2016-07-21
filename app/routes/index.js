/*
 * GET home page.
 */

var path = require('path');

exports.index = function(req, res){
  res.render('index.html');
};

exports.partials = function (req, res) {
  var name = req.params.name + '.html';
  res.render('partials/' + name);
};