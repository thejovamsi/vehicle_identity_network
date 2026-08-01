import prisma  from "../config/prisma.js";


type CreateVehicleData = {
    make:string;
    model:string;
    year?:number;
    color?:string;
    licensePlate:string;
}
type UpdateVehicleData = {
    make?:string;
    model?:string;
    year?:number;
    color?:string;
    licensePlate?:string;
}

export const createVehicleService = async (
    vehicleData: CreateVehicleData,
    userId: string
) => {
    const { make, model, year, color, licensePlate } = vehicleData;

    const existingVehicle = await prisma.vehicle.findUnique({
        where: {
            licensePlate
        }
    });
    if (existingVehicle) {
        throw new Error("Vehicle with this license plate already exists");
    } 
    const vehicle = await prisma.vehicle.create({
        data: {
            make,
            model,
            year: year !== undefined ? year : null,
            color: color !== undefined ? color : null,
            licensePlate,
            ownerId: userId
        },
        select: {
            id: true,
            ownerId: true,
            make: true,
            model: true,
            year: true,
            color: true,
            licensePlate: true,
            createdAt: true
        }
    });

    return vehicle;
};

export const getVehiclesByUserId = async (userId: string) => {
    const vehicles = await prisma.vehicle.findMany({
        where: {
            ownerId: userId
        },
        select: {
            id: true,
            ownerId: true,
            make: true,
            model: true,
            year: true,
            color: true,
            licensePlate: true,
            createdAt: true
        }
    });
    return vehicles;
}

//For finding a single vehcile
export const getVehicleByIdService = async ( vehicleId: string,userId: string) => 
    {
    const vehicle = await prisma.vehicle.findFirst({
        where: {
            id: vehicleId,
            ownerId: userId
        }
    });

    if (!vehicle) {
        throw new Error("Vehicle not found");
    }

    return vehicle;
};

// to update the vehicle
export const updateVehicleByIdService = async( vehicleId:string, userId:string, updateData:UpdateVehicleData )=>{
    const vehicle = await prisma.vehicle.findFirst({
        where:{
            id:vehicleId,
            ownerId:userId
        }
    })
    if(!vehicle){
        throw new Error("Vehicle not found");
    }
    else {
        const updatedVehicle = await prisma.vehicle.update({
            where:{
                id:vehicleId
            },
            data:updateData,
            select:{
                id:true,
                ownerId:true,
                make:true,
                model:true,
                year:true,
                color:true,
                licensePlate:true,
                createdAt:true
            }
        })
        return updatedVehicle; 
    }
}

//Delete a vehicle by id 
export const deleteVehicleByIdService = async (vehicleId:string, userId:string)=>{
    const vehicle = await prisma.vehicle.findFirst({
        where:{
            id:vehicleId,
            ownerId:userId
        }
    })
    if(!vehicle){
        throw new Error("Vehicle not found");
    }
    else{
        const deleteVehicle = await prisma.vehicle.delete({
            where:{
                id:vehicleId
            }
        })
        return deleteVehicle;
    }
}