var _    = require('lodash');
var util = require('util');

module.exports = commandSimple;

function commandSimple (token, options) {
  this.token = token;
  this.options = options;
}

commandSimple.prototype.handle = function (req, res, cb) {
  var bodyText = req.body.text;
  console.log(bodyText);
  cb(null, 'Received commmand with text: ' + bodyText);
};
