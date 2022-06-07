const jwt = require("jsonwebtoken");

// @desc Generate JWT
const generateJwtToken = (id,email) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_Expires,
  });
};

module.exports = generateJwtToken;
