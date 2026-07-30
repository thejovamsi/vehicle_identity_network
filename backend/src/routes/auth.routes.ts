import { Router } from "express";
import { register,login } from "../controllers/auth.controller.js";
import { validate } from "../middleware/validate.js";
import { loginSchema, registerSchema} from "../validations/auth.validation.js";
import { createVehicle } from "../controllers/vehicle.controller.js";
import { createVehicleSchema } from "../validations/vehicle.validation.js";
import { authenticate } from "../middleware/jwtAuth.js";
import { create } from "node:domain";


const router = Router();

router.post("/register", validate(registerSchema), register);
router.post("/login", validate(loginSchema), login);
router.get("/test", authenticate, (req, res) => {
    res.json({ message:"authenticated" });
});
router.post("/vehicle", authenticate,validate(createVehicleSchema), createVehicle);

export default router;