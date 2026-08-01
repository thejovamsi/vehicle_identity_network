import { createVehicleService, getVehiclesByUserId } from "../services/vehicle.service.js";
import type { Request, Response } from "express";
import { getVehicleByIdService, updateVehicleByIdService, deleteVehicleByIdService } from "../services/vehicle.service.js";


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

// Request to get all vehicles by user id from the token
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

//Request to get single vehicle by id in the path parameter

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


// Request to update vehicle by id in the path parameter
export const updateVehicleById = async(req:Request<VehicleParams>, res:Response) =>{
  try{
    const userId = (req as any).user.userId;
    const vehicleId = req.params.id;
    const updateVehicle = await updateVehicleByIdService(vehicleId, userId, req.body);
    res.status(200).json(updateVehicle);
  }catch(error){
   if(error instanceof Error && error.message === "Vehicle not found"){
       return res.status(404).json({
           message: error.message
       });
   }
   else{
       return res.status(500).json({
           message: "Internal server error"
       });
   }
  }
}

// Deleting the vehicle by id in the path parameter
export const deleteVehicleById = async(req:Request<VehicleParams>, res:Response) =>{
  try{
    const userId = (req as any).user.userId;
    const vehicleId= req.params.id;
    const deleteVehicle = await deleteVehicleByIdService(vehicleId, userId);
    res.status(200).json(deleteVehicle);
  }catch(error){
    if(error instanceof Error && error.message === "Vehicle not found"){
        return res.status(404).json({
            message: error.message
        });
    }
    else{
        return res.status(500).json({
            message: "Internal server error"
        });
    }
  }
}
