import { Router } from "express";
import { authSignInController } from "./controllers/auth/sign-in";
import { authSignUpController } from "./controllers/auth/sign-up";
import { createClientController } from "./controllers/create-client";
import { listClientController } from "./controllers/list-client";
import { authMiddleware } from "./middlewares/auth-middleware";
import { authSignInWithTokenController } from './controllers/auth/sign-in-with-token';

const router = Router();

// Authentication routes
router.post("/auth/sign-in", authSignInController);
router.post("/auth/sign-up", authSignUpController);
router.post("/auth/token", authSignInWithTokenController);

// Client routes
router.get("/client", [authMiddleware], listClientController);
router.post("/client", [authMiddleware], createClientController);

export { router };
