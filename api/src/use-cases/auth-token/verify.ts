import jwt from "jsonwebtoken";
import { ENV_VARIABLES } from "~/config/env";

interface TokenDTO {
  userId: string;
}

async function verifyToken(token: string): Promise<TokenDTO> {
  return new Promise<TokenDTO>((resolve, reject) =>
    jwt.verify(token, ENV_VARIABLES.JWT_SECRET, function (err, decoded) {
      if (err) {
        return reject(err);
      }

      resolve(decoded as TokenDTO);
    })
  );
}

export { verifyToken };
