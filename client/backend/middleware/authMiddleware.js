const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
  console.log("Authorization Header:", req.headers.authorization);

  if (!req.headers.authorization) {
    return res.status(401).json({ message: "No Token" });
  }

  try {
    const token = req.headers.authorization.split(" ")[1];

    console.log("Token:", token);

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    console.log("Decoded:", decoded);

    req.user = decoded;

    next();
  } catch (error) {
    console.log("JWT Error:", error);

    return res.status(401).json({
      message: "Not Authorized",
    });
  }
};

module.exports = protect;