import prisma from "../config/prisma.js";
import bcrypt from "bcrypt";

type RegisterUserData = {
    name: string;
    email: string;
    password: string;
    phoneNumber?: string;
    createdAt?: Date;
};



export const registerUser = async (userData: RegisterUserData) => {
    const { name, email, password, phoneNumber } = userData;
    const existingUser = await prisma.user.findUnique({
        where: {
            email
        }
    });
    if (existingUser) {
        throw new Error("User with this email already exists");
    }

    const passwordHash = await bcrypt.hash(password,10);
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