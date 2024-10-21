import express, { Application, NextFunction, Request, Response } from "express";
import IndexRouter from "./routes";
import cors from "cors";
import "dotenv/config";
import { connectToDb } from "./config/db";
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", IndexRouter);


app.listen(PORT, async () => {
    console.log("Server is running on port 5000");
    await connectToDb();
});