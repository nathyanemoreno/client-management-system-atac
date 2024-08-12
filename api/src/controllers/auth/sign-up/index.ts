import { NextFunction, Request, Response } from 'express';
import { signToken } from '~/use-cases/auth-token/sign';
import { createUser } from '~/use-cases/users/create-user';
import { authSignUpParamsValidate } from './validate';
import bcrypt from 'bcrypt';

const authSignUpController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const validated = authSignUpParamsValidate(req.body, next);

    if (validated) {
      const { name, email, password } = validated;

      const hashedPassword = await bcrypt.hash(password, 10);

      const user = await createUser({ name, email, password: hashedPassword });

      //const user = mapUserModelToDTO(user);

      if (user?.id == null) {
        return res.status(404).send({ message: 'Could not create user' });
      }

      const authToken = await signToken({ userId: user?.id });

      res.status(201).send({ user, authToken });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

export { authSignUpController };
