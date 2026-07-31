import { createVehicleService, getVehiclesByUserId } from "../services/vehicle.service.js";
import type { Request, Response } from "express";
import { getVehicleByIdService } from "../services/vehicle.service.js";


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

export const getAllVehiclesByUserId = async(req:Request, res:Response) =>
{
  try{
    const userId= (req as any).user.userId;
    const vehicles = await getVehiclesByUserId(userId);
    res.status(200).json(vehicles);
    }
    catch(error){
       if(error instanceof Error && error.message === "Vehicle not found")
       {
        return res.status(404).json({
          message: error.message
        });
       }
       else if(error instanceof Error && error.message === "Duplicate license plate")
        {
          return res.status(409).json({
            message: error.message
          });
        }
        else{
          return res.status(500).json({
            message: "Internal server error"
          });
       }
      };
}

type VehicleParams= {
  id:string;
}
export const getVehicleById = async (req: Request<VehicleParams>, res: Response) => {
    try {
        const userId = (req as any).user.userId;
        const vehicleId = req.params.id;

        const vehicle = await getVehicleByIdService(vehicleId, userId);

        res.status(200).json(vehicle);
    } catch (error) {
        if (
            error instanceof Error &&
            error.message === "Vehicle not found"
        ) {
            return res.status(404).json({
                message: error.message
            });
        }

        return res.status(500).json({
            message: "Internal server error"
        });
    }
};