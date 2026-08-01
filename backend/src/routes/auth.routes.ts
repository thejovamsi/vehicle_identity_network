import { Router } from "express";
import { register,login } from "../controllers/auth.controller.js";
import { validate } from "../middleware/validate.js";
import { loginSchema, registerSchema} from "../validations/auth.validation.js";
import { createVehicle, getAllVehiclesByUserId, getVehicleById, updateVehicleById, deleteVehicleById } from "../controllers/vehicle.controller.js";
import { createVehicleSchema,VehicleIdSchema, updateVehicleSchema } from "../validations/vehicle.validation.js";
import { authenticate } from "../middleware/jwtAuth.js";

const router = Router();

router.post("/register", validate(registerSchema), register);
router.post("/login", validate(loginSchema), login);
router.get("/test", authenticate, (req, res) => {
    res.json({ message:"authenticated" });
});
router.post("/vehicles", authenticate,validate(createVehicleSchema), createVehicle);
router.get("/vehicles",authenticate, getAllVehiclesByUserId );
router.get("/vehicles/:id",authenticate, getVehicleById);
router.patch("/vehicles/:id", authenticate, validate(updateVehicleSchema), updateVehicleById);
router.delete("/vehicles/:id", authenticate, deleteVehicleById);

export default router;