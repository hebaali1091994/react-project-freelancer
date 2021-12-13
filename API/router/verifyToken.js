const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;

  if (authHeader) {
    // const token = authHeader.split(" ")[1];

    jwt.verify(authHeader, process.env.JWT_SEC, (error, user) => {
      if (error) {
        return res.status(403).json("Your Token Is invalid");
      } else {
        req.user = user;
        next();
      }
    });
  } else {
    return res.status(400).json("You are not authenticated");
  }
};

const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.typeUser === "admin") {
      next();
    } else {
      res.status(403).json("Your Are Now Allow to make that !");
    }
  });
};
const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.typeUser === "admin") {
      next();
    } else {
      res.status(403).json("Your Are Not  Admin");
    }
  });
};

module.exports = {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
};
