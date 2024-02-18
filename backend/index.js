import dotenv from "dotenv";
import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";
import authRoute from "./routes/authRoutes.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use("/public", express.static("public"));

app.use("/uploads", express.static("uploads"));
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Authorization", "Content-Type"],
  })
);

app.use(cors());
app.get("/", (req, res) => {
  return res.status(200);
});

app.use("/books", booksRoute);
app.use("/auth", authRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("Database Connected!!!");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
