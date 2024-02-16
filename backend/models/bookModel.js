import mongoose from "mongoose";

const booksSchema = mongoose.Schema(
  {
    serial: { type: Number, required: true },
    name: { type: String, required: true },
    fatherName: { type: String, required: true },
    district: { type: String, required: true },
    address: { type: String, required: true },
    contactNumber: { type: Number, required: true },
    email: { type: String, required: true },
    nicNumber: { type: Number, required: true },
    imagePath: { type: String },
  },
  {
    timestamps: true,
  }
);

export const Book = mongoose.model("Book", booksSchema);
