import { Request, Response } from 'express';
import { createClient } from '~/use-cases/client/create';

export const createClientController = async (req: Request, res: Response) => {
  const { name, email, phone, coordinate_x, coordinate_y } = req.body;

  try {
    const newClient = await createClient({
      name,
      email,
      phone,
      coordinate_x,
      coordinate_y,
    });

    res.status(201).json(newClient);
  } catch (error) {
    res.status(500).json({ error: 'Error creating the client.' });
  }
};
