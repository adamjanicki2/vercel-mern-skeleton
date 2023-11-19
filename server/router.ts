import express, { Request, Response } from "express";
import { OK } from "./util";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  return res.status(OK).json({ message: "Welcome to the API" });
});

export default router;
