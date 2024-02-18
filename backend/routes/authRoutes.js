// routes/authRoutes.js
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import bcrypt from "bcrypt";
import { User } from "../models/userModel.js";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, email, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// routes/login

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ error: "Invalid username or password" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid username or password" });
    }
    const token = jwt.sign(
      { username: user.username },
      process.env.JWT_SECRET || "my-secret"
    );
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.post("/logout", (req, res) => {
  // Clear the token from the client-side storage (e.g., local storage or cookies)
  // This could also involve revoking the token from a blacklist or database, if needed
  res.clearCookie("jwtToken"); // Example: Clear JWT token from cookies
  res.status(200).json({ message: "User logged out successfully" });
});

export default router;
