//routes/userRoutes

import express from "express";
const router = express.Router();
import { User } from "../models/userModel.js";
import { Book } from "../models/bookModel.js";
import { verifyToken } from "../middleware/authMiddleware.js";

router.get("/:id", verifyToken, async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const entries = await Book.find({ createdBy: user.id });
    let data = {
      ID: user.id,
      FullName: user.fullname,
      Username: user.username,
      Email: user.email,
      TotalEntries: entries.length,
      Entries: entries,
    };
    return res.status(200).json(data);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

export default router;
