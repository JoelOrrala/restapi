const jwt = require('jsonwebtoken');

const authenticateJWT = (req, res, next) => {
  const token = req.headers.token;

  if (token) {
    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
      if (err) {
        return res.sendStatus(408); 
      }

      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401); 
  }
};

module.exports = authenticateJWT;
