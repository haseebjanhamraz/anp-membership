//routes/userRoutes

import express from "express";
const router = express.Router();
import { User } from "../models/userModel.js";
import { verifyToken } from "../middleware/authMiddleware.js";

router.get("/:id", verifyToken, async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    let data = {
      ID: user.id,
      FullName: user.fullname,
      Username: user.username,
      Email: user.email,
    };
    return res.status(200).json(data);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});
export default router;
