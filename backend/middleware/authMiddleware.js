//Auth Middleware

import jwt from "jsonwebtoken";

// Function to generate JWT token with user ID included in the payload
const generateToken = (userId) => {
  const payload = {
    userId: userId, // Include the user ID in the payload
    // Add other necessary fields to the payload if needed
  };

  // Sign the token with your JWT secret key
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "1h", // Set token expiration time if needed
  });

  return token;
};

export const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ error: "Access denied. No token provided" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      // Token has expired
      return res.status(401).json({ error: "Token has expired" });
    }
    res.status(400).json({ error: "Invalid token" });
  }
};

export default generateToken; // Export the generateToken function
