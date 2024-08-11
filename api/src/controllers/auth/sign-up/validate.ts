import { NextFunction } from "express";
import Joi from "joi";
import { AuthSignUpBody } from "~/types/dtos/auth";

const authSignUpParamsValidate = (data: AuthSignUpBody, next: NextFunction): AuthSignUpBody | void => {
  const schema = Joi.object<AuthSignUpBody>({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required()
  });

  const { value, error } = schema.validate(data, {
    abortEarly: false,
  });

  if (error) {
    return next(error);
  }

  return value;
};

export { authSignUpParamsValidate };
