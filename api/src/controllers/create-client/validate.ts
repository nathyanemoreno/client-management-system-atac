import { NextFunction } from 'express';
import Joi from 'joi';
import { CreateClientBody } from '~/types/dtos/client';

const createClientParamsValidate = (
    data: CreateClientBody,
    next: NextFunction,
): CreateClientBody | void => {
    const schema = Joi.object<CreateClientBody>({
        name: Joi.string().min(3).required(),
        phone: Joi.string().required(),
        email: Joi.string().email().required(),
        coordinate_x: Joi.string().optional(),
        coordinate_y: Joi.string().optional(),
    });

    const { value, error } = schema.validate(data, {
        abortEarly: false,
    });

    if (error) {
        return next(error.message);
    }

    return value;
};

export { createClientParamsValidate };
