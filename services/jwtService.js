import jwt from "jsonwebtoken";

export function signJwt(payload, secret) {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, secret, { expiresIn: "1h" }, (err, token) =>
      err ? reject(err) : resolve(token)
    );
  });
}

export function decodeJwt(token) {
  // Decode without verifying signature
  return jwt.decode(token, { complete: true });
}

export function verifyJwt(token, secret) {
  return jwt.verify(token, secret);
}
