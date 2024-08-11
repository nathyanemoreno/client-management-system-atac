import { NextFunction, Request, Response } from "express";
import { verifyToken } from "~/use-cases/auth-token/verify";

const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: "No token provided" });
  }

  const parts = authHeader.split(" ");
  if (parts.length !== 2) {
    return res.status(401).json({ error: "Invalid token format" });
  }

  const [scheme, token] = parts;

  if (!/^Bearer$/i.test(scheme)) {
    return res.status(401).json({ error: "Token malformatted" });
  }

  try {
    const { userId } = await verifyToken(token);
    res.locals.userId = userId;

    return next();
  } catch (error) {
    res.status(401).json({ error: "Token invalid" });
  }
};

export { authMiddleware };
