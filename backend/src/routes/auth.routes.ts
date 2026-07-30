import { Router } from "express";
import { register,login,createVehicle } from "../controllers/auth.controller.js";
import { validate } from "../middleware/validate.js";
import { loginSchema, registerSchema, createVehicleSchema } from "../validations/auth.validation.js";
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