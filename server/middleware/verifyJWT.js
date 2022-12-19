const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const verifyJWT = asyncHandler(async (req, res, next) => {
  const authHeader = req?.headers?.authorization || req?.headers?.Authorization;
  if (!authHeader?.startsWith("Bearer")) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const token = authHeader?.split(" ")[1];

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, decoded) => {
    if (error) {
      return res.status(403).json({ message: "Forbidded" });
    }
    req.user = decoded.userInfo.username;
    req.roles = decoded.userInfo.roles;
    next();
  });
});

module.exports = verifyJWT;
