import { Client } from 'pg';
import { database } from '~/infra/database/pg';
import { CreateClientBody } from '~/types/dtos/client';

async function createClient({
  name,
  email,
  phone,
  coordinate_x,
  coordinate_y,
}: CreateClientBody): Promise<Client | null> {
  const result = await database.query(
    'INSERT INTO client (name, email, phone, coordinate_x, coordinate_y) VALUES ($1, $2, $3, $4, $5) RETURNING *',
    [name, email, phone, coordinate_x, coordinate_y],
  );

  const newClient: Client = result.rows[0];

  return newClient;
}

export { createClient };
