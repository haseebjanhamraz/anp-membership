import express from "express";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";
import authRoute from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

app.use(express.json());

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const buildpath = path.join(__dirname, "../frontend/dist");
app.use(express.static(buildpath));
app.use("/uploads", express.static("uploads"));

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Authorization", "Content-Type"],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  return res.status(200).send("Hello, World!");
});

app.use("/books", booksRoute);
app.use("/auth", authRoute);
app.use("/user", userRoutes);

app.get("*", (req, res) => {
  res.sendFile(path.join(buildpath, "index.html"));
});

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
