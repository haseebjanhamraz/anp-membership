//models/bookModel.js
import mongoose from "mongoose";
const Schema = mongoose.Schema;

const booksSchema = new Schema(
  {
    serial: { type: Number, required: true },
    name: { type: String, required: true },
    fatherName: { type: String, required: true },
    district: { type: String, required: true },
    address: { type: String, required: true },
    contactNumber: { type: Number, required: true },
    email: { type: String, required: true },
    nicNumber: { type: Number, required: true },
    status: { type: String, required: true },
    imagePath: { type: String },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

export const Book = mongoose.model("Book", booksSchema);
