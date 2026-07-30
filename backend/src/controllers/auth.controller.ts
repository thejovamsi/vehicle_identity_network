import { registerUser } from "../services/auth.service.js";
import type { Request, Response } from "express";
import { loginUser } from "../services/auth.service.js";

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

   export const login = async (req: Request, res: Response) => {
    try{
        const user = await loginUser(req.body);
        res.status(201).json(user);
    }catch(error){
        if(error instanceof Error && error.message === "Invalid email or password"){
            return res.status(401).json({
                message:error.message
            });
        }else{
            return res.status(500).json({
                message:"Internal server error"
            });
        }
    }   
};
export const createVehicle = async(req:Request, res:Response) =>{
    const user = (req as any).user;
    console.log("user", user.userId);
} 