import express from "express";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";
import authRoute from "./routes/authRoutes.js";

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

app.get("/", (req, res) => {
  return res.status(200).send("Hello, World!");
});

app.use("/books", booksRoute);
app.use("/auth", authRoute);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Database Connected!!!");
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
