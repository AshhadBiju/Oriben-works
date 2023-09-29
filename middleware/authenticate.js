
const {User} = require("../models");
const jwt = require("jsonwebtoken");
const asynHandler = require("express-async-handler");

const authMiddleware = asynHandler(async (req, res, next) => {
  let token;
  console.log(req?.headers?.authorization);
  if (req?.headers?.authorization?.startsWith("Bearer")) {
    token = req?.headers?.authorization.split(" ")[1];
    try {
      if (token) {
        const decoded = jwt.verify(token, "1111");
        const user = await User.findByPk(decoded?.userID);
        console.log(`user=${user}`);
        req.user = user;
        next();
        console.log(decoded);
      }
    } catch (error) {
      throw new error("Not authorized token expired, please login again");
    }
  } else {
    throw new error("there is no token attached to header");
  }
});
const isAdmin = asynHandler(async (req, res, next) => {
  const { email } = req.user;
  const adminUser = await User.findOne({where:{email:email}  });
  if (adminUser.role !== "admin") {
    throw new error("You are not admin");
  }else{
    next();
  }
});
module.exports = { authMiddleware, isAdmin };