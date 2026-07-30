import { createVehicleService } from "../services/vehicle.service.js";
import type { Request, Response } from "express";

export const createVehicle = async(req:Request, res:Response) =>{
  try {
    const user = (req as any).user;
    const vehicle = await createVehicleService(req.body, user.userId);
    res.status(201).json(vehicle);
  } catch (error) {
    if (error instanceof Error && error.message === "Vehicle with this license plate already exists") {
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