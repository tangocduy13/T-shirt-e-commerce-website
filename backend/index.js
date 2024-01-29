import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import authRoute from "./routes/authRoute.js";

dotenv.config();
const PORT = process.env.PORT;
const MongoURL = process.env.MongoDBURL;

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
    allowedHeader: ["Content-Type"],
  }),
);
app.use(express.json());
app.use(cookieParser());

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use("/", express.static(path.join(__dirname, "public")));
app.use("/api", authRoute);

mongoose
  .connect(MongoURL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server are running on PORT: 5000`);
    });
  })
  .catch((error) => {
    console.error(error);
  });
