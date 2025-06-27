import { signJwt, decodeJwt, verifyJwt } from "../services/jwtService.js";

export async function signToken(req, res) {
  try {
    const { payload, secret } = req.body;
    if (!payload || !secret)
      return res.status(400).json({ error: "Missing payload or secret" });

    const token = await signJwt(payload, secret);
    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: "Failed to sign token" });
  }
}

export async function decodeToken(req, res) {
  try {
    const { token } = req.body;
    if (!token) return res.status(400).json({ error: "Missing token" });

    const decoded = decodeJwt(token);
    res.json({ decoded });
  } catch (err) {
    res.status(400).json({ error: "Invalid token" });
  }
}

export async function verifyToken(req, res) {
  try {
    const { token, secret } = req.body;
    if (!token || !secret)
      return res.status(400).json({ error: "Missing token or secret" });

    const verified = verifyJwt(token, secret);
    res.json({ verified });
  } catch (err) {
    res.status(401).json({ error: "Invalid or expired token" });
  }
}
