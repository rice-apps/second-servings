const config = require("config");
const jwt = require("jsonwebtoken");
const debug = require("debug")("app:mw:admin");

module.exports = function authorize(req, res, next) {
  debug("Verifying admin status...");

  if (!req.user.isAdmin) return res.status(403).send("Forbidden.");
  next();
};
