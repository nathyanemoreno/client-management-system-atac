import { NextFunction } from 'express';
import Joi from 'joi';
import { AuthSignInBody } from '~/types/dtos/auth';

const authSignInParamsValidate = (data: AuthSignInBody, next: NextFunction): AuthSignInBody | void => {
  const schema = Joi.object<AuthSignInBody>({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  });

  const { value, error } = schema.validate(data, {
    abortEarly: false,
  });

  if (error) {
    return next(error);
  }

  return value;
};

export { authSignInParamsValidate };

