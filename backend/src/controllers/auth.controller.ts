import { registerUser } from "../services/auth.service.js";
import type { Request, Response } from "express";

export const register = async (req: Request, res: Response) => {
    try {
        const user = await registerUser(req.body);
        res.status(201).json(user);
    } catch (error) {
        if (error instanceof Error && error.message === "User with this email already exists") {
            return res.status(409).json({
                message: error.message
            });
        } else {
            return res.status(500).json({
                message: "Internal server error"
             });
        }
    }
};
