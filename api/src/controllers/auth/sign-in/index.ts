import { NextFunction, Request, Response } from 'express';
import { signToken } from '~/use-cases/auth-token/sign';
import { getUserByEmailAndPassword } from '~/use-cases/users/get-by-email-and-password';
import { authSignInParamsValidate } from './validate';

const authSignInController = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        const validated = authSignInParamsValidate(req.body, next);

        if (validated) {
            const { email, password } = validated;

            const user = await getUserByEmailAndPassword(email, password);

            if (!user) {
                return res.status(404).send('No user found');
            }

            const authToken = await signToken({ userId: user?.id });

            res.status(200).send({ user, authToken });
        }
    } catch (error) {
        res.status(500).send(error);
    }
};

export { authSignInController };
