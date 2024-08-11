import jwt from "jsonwebtoken";
import { ENV_VARIABLES } from "~/config/env";

interface TokenDTO {
  userId: string;
}

async function signToken(payload: TokenDTO): Promise<string> {
  const token = jwt.sign(payload, ENV_VARIABLES.JWT_SECRET);

  return token;
}

export { signToken };
