import { Router } from "express";
import { register } from "../controllers/auth.controller.js";
import { validate } from "../middleware/validate.js";
import { loginSchema, registerSchema } from "../validations/auth.validation.js";
import { login } from "../controllers/auth.controller.js";
import { authenticate } from "../middleware/jwtAuth.js";

const router = Router();

router.post("/register", validate(registerSchema), register);
router.post("/login", validate(loginSchema), login);
router.get("/test", authenticate, (req, res) => {
    res.json({ message:"authenticated" });
});

export default router;