import { NextFunction } from 'express';
import Joi from 'joi';
import { AuthSignInWithTokenBody } from '~/types/dtos/auth';

const authSignInWithTokenParamsValidate = (
    data: AuthSignInWithTokenBody,
    next: NextFunction,
): AuthSignInWithTokenBody | void => {
    const schema = Joi.object<AuthSignInWithTokenBody>({
        authToken: Joi.string().required(),
    });

    const { value, error } = schema.validate(data, {
        abortEarly: false,
    });

    if (error) {
        return next(error);
    }

    return value;
};

export { authSignInWithTokenParamsValidate };
