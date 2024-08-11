import { NextFunction, Request, Response } from 'express';
import { verifyToken } from '~/use-cases/auth-token/verify';
import { getUserById } from '~/use-cases/users/get-by-id';
import { authSignInParamsValidate } from './validate';
import { valid } from 'joi';

const authSignInController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const validated = authSignInParamsValidate(req.body, next);

    if (validated) {
      const authToken = validated.authToken;

      const { userId } = await verifyToken(authToken);

      const user = await getUserById(userId);

      if (!user) {
        return res.status(401).send('Bad login information');
      }

      //const user = mapUserModelToDTO(user);

      res.status(200).send({ user, authToken });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

export { authSignInController };
