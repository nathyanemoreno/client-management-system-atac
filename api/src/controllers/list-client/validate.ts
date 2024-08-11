import { NextFunction } from 'express';
import Joi from 'joi';
import { ListClientReqQuery } from '~/types/dtos/client';

const listClientReqQueryValidate = (
    data: ListClientReqQuery,
    next: NextFunction,
): ListClientReqQuery | void => {
    const schema = Joi.object<ListClientReqQuery>({
        name: Joi.string().min(3).optional(),
        phone: Joi.string().optional(), //TODO: validate phone number
        email: Joi.string().email().optional(),
    });

    const { value, error } = schema.validate(data, {
        abortEarly: false,
    });

    if (error) {
        return next(error);
    }

    return value;
};

export { listClientReqQueryValidate };
