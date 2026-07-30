import {z} from 'zod';
import { makeIssue } from 'zod/v3';

export const registerSchema = z.object({
    name:z.string().min(2,"Name must be at least 2 characters long"),
    email:z.email("Invalid email address"),
    password:z.string().min(8,"Password must be at least 8 characters long"),
    phoneNumber:z.string().optional()
})

export const loginSchema = z.object({
    email:z.email("Invalid email address"),
    password:z.string().min(8,"Password must be at least 8 characters long")
})

export const createVehicleSchema = z.object({
    make:z.string(),
    model:z.string(),
    year:z.number()
          .int()
          .min(1886,"Year must be a valid year")
          .max(new Date().getFullYear(),"Year cannot be in the future")
          .optional(),
    color:z.string().optional(),
    licensePlate:z.string()
})