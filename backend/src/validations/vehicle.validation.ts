import { z } from "zod";

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