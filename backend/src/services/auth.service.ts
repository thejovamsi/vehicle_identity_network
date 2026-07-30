import prisma from "../config/prisma.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

type RegisterUserData = {
    name: string;
    email: string;
    password: string;
    phoneNumber?: string;
    createdAt?: Date;
};
type LoginUserData = {
    email: string;
    password: string;
};
type CreateVehicleData = {
    make:string;
    model:string;
    year?:number;
    color?:string;
    licensePlate:string;
}



export const registerUser = async (userData: RegisterUserData) => {
    const { name, email, password, phoneNumber } = userData;

    // Check if user with the same email already exists
    const existingUser = await prisma.user.findUnique({
        where: {
            email
        }
    });
    if (existingUser) {
        throw new Error("User with this email already exists");
    }
    const passwordHash = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
        data: {
            name,
            email,
            passwordHash
        },
        select:{
            id:true,
            name:true,
            email:true,
            phoneNumber:true,
            createdAt:true,
            passwordHash:true
        }
    });
    return user;
};
export const loginUser = async (userData: LoginUserData) => {
    const { email, password } = userData;

    console.log("email", email);
    const user = await prisma.user.findUnique({
        where: {
            email
        }
    });
    console.log("user", user);
     if (!user) {
        throw new Error("Invalid email or password");
    }

    // Check if password is valid
    const isPasswordValid = await bcrypt.compare(
        password, 
        user.passwordHash
    );
    if (!isPasswordValid) {
        throw new Error("Invalid email or password");
    }
    
    const payload = {
        userId: user.id,
        email: user.email
    };
    const token = jwt.sign(
        payload,
        process.env.JWT_SECRET!,
        { expiresIn: "1h" }
    );
   console.log(`User ${user.email} logged in`); 
    return { user, token };
};

export const createVehicle = async (
    vehicleData: CreateVehicleData,
    userId: string
) => {
    const { make, model, year, color, licensePlate } = vehicleData;

    const vehicle = await prisma.vehicle.create({
        data: {
            make,
            model,
            year,
            color,
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