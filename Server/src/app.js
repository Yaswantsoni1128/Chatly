import cors from "cors";
import express from "express";
const app = express();
import cookieParser from "cookie-parser";

app.use(cors({
  origin: process.env.CORS_ORIGIN || "http://localhost:5173",
  credentials: true
}));

app.use(express.json({
  extended: true,
  limit: "16kb"
}));

app.use(express.urlencoded({
  extended: true,
  limit: "16kb"
}));

app.use(express.static('public'));

app.use(cookieParser());

export {app}