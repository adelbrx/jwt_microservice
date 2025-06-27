export function validateSignRequest(req, res, next) {
  const { payload, secret } = req.body;
  if (!payload || !secret) {
    return res.status(400).json({ error: "Missing payload or secret" });
  }
  next();
}

export function validateDecodeRequest(req, res, next) {
  const { token } = req.body;
  if (!token) {
    return res.status(400).json({ error: "Missing token" });
  }
  next();
}

export function validateVerifyRequest(req, res, next) {
  const { token, secret } = req.body;
  if (!token || !secret) {
    return res.status(400).json({ error: "Missing token or secret" });
  }
  next();
}
