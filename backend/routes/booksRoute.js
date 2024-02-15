import express from "express";
import { Book } from "../models/bookModel.js";
import multer from "multer";
import * as path from "path";
const router = express.Router();

// Configure multer for file uploads
// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Save uploaded files to the 'uploads' directory
  },
  filename: (req, file, cb) => {
    // Extract the original extension of the uploaded file
    const ext = path.extname(file.originalname);
    // Generate a unique filename with the current timestamp and the original extension
    const fileName = `${Date.now()}${ext}`;
    // Set the new filename for the uploaded file
    file.filename = fileName;
    cb(null, fileName);
  },
});

const upload = multer({ storage });

// POST Route for creating a new book with image upload
router.post("/", upload.single("image"), async (req, res) => {
  try {
    // Check if all required fields are provided
    if (
      !req.body.serial ||
      !req.body.name ||
      !req.body.fatherName ||
      !req.body.address ||
      !req.body.contactNumber ||
      !req.body.email ||
      !req.body.nicNumber
    ) {
      return res.status(400).send({ message: "All fields are required" });
    }

    // Extract book data from request body
    const {
      serial,
      name,
      fatherName,
      address,
      contactNumber,
      email,
      nicNumber,
    } = req.body;
    const imagePath = req.file ? req.file.path : "public/default.png"; // Use Multer-uploaded file path

    // Create new book instance
    const newBook = new Book({
      serial,
      name,
      fatherName,
      address,
      contactNumber,
      email,
      nicNumber,
      imagePath,
    });

    // Save the book to the database
    await newBook.save();

    return res.status(201).send(newBook);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

router.put("/:id", upload.single("image"), async (req, res) => {
  try {
    const { id } = req.params;
    // Check if all required fields are provided
    if (
      !req.body.serial ||
      !req.body.name ||
      !req.body.fatherName ||
      !req.body.address ||
      !req.body.contactNumber ||
      !req.body.email ||
      !req.body.nicNumber
    ) {
      return res.status(400).send({ message: "All fields are required" });
    }

    // Extract book data from request body
    const {
      serial,
      name,
      fatherName,
      address,
      contactNumber,
      email,
      nicNumber,
    } = req.body;
    let imagePath = "";

    // If file was uploaded, use its path; otherwise, use the existing imagePath
    if (req.file) {
      imagePath = req.file.path; // Use Multer-uploaded file path
    } else {
      // If no new file was uploaded, keep the existing imagePath
      const existingBook = await Book.findById(id);
      if (!existingBook) {
        return res.status(404).json({ message: "Book not found" });
      }
      imagePath = existingBook.imagePath;
    }

    // Update book in the database
    const result = await Book.findByIdAndUpdate(
      id,
      {
        serial,
        name,
        fatherName,
        address,
        contactNumber,
        email,
        nicNumber,
        imagePath,
      },
      { new: true }
    );

    if (!result) {
      return res.status(404).json({ message: "Book not found" });
    }

    return res
      .status(200)
      .json({ message: "Book updated successfully", book: result });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: error.message });
  }
});

// Get Route
router.get("/", async (req, res) => {
  try {
    const books = await Book.find({});
    return res.status(200).json({
      count: books.length,
      data: books,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// Route for one book from the database by ID
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    return res.status(200).json(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// Route for deleting a book
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Book.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ message: "Book not found" });
    }
    return res.status(200).send({ message: "Book deleted successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

export default router;
