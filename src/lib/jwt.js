import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

export function generateToken(admin) {
  return jwt.sign(
    {
      id: admin._id,
      name: admin.name,
      email: admin.email,
      role: admin.role,
    },
    JWT_SECRET,
    {
      expiresIn: "7d",
    },
  );
}

export function verifyToken(token) {
  return jwt.verify(token, JWT_SECRET);
}
