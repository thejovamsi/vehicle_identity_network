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
export const VehicleIdSchema = z.object({
    id:z.uuid()
})

//  taking same schema from createVehicleSchema and making all fields optional for update using zod's partial method
export const updateVehicleSchema = createVehicleSchema.partial()