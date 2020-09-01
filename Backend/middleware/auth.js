const config = require("config");
const jwt = require("jsonwebtoken");
const debug = require("debug")("app:mw:auth");

module.exports = function authorize(req, res, next) {
  debug("Authorizing request...");

  const token = req.header("x-auth-token");
  if (!token) return res.status(401).send("Access denied. No token provided.");

  try {
    const decoded = jwt.verify(token, config.get("jwtKey"));
    req.user = decoded;
    next();
  } catch (ex) {
    res.status(400).send("Invalid token provided.");
  }
};
