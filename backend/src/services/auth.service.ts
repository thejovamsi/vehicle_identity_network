import prisma from "../config/prisma.js";
type RegisterUserData = {
    name: string;
    email: string;
    passwordHash: string;
    phoneNumber?: string;
    createdAt?: Date;
};



export const registerUser = async (userData: RegisterUserData) => {
    const { name, email, passwordHash, phoneNumber } = userData;
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
            createdAt:true
        }
    });
    return user;
};