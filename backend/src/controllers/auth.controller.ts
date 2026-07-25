import { registerUser } from "../services/auth.service.js";
import type { Request, Response } from "express";

export const register = async (req: Request, res: Response) => {
    const user = await registerUser(req.body);
    res.status(201).json(user);
};