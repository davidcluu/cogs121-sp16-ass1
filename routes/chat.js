var models = require("../models");

exports.view = function(req, res) {
  if (req.user) {
    res.render("chat");
  }
  else {
    res.redirect("/");
  }
};
