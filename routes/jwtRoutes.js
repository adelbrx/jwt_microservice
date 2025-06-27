import express from "express";
import {
  signToken,
  decodeToken,
  verifyToken,
} from "../controllers/jwtController.js";

import {
  validateSignRequest,
  validateDecodeRequest,
  validateVerifyRequest,
} from "../middlewares/validationRequest.js";

const router = express.Router();

router.post("/sign", validateSignRequest, signToken);
router.post("/decode", validateDecodeRequest, decodeToken);
router.post("/verify", validateVerifyRequest, verifyToken);

export default router;
