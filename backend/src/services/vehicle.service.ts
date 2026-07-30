import prisma  from "../config/prisma.js";


type CreateVehicleData = {
    make:string;
    model:string;
    year?:number;
    color?:string;
    licensePlate:string;
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