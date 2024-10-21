import { Router } from "express";
import authRouter from "./auth.routes";

const IndexRouter = Router();

IndexRouter.use("/auth", authRouter);

export default IndexRouter;