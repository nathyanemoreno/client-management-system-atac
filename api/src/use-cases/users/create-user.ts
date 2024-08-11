import { database } from '~/infra/database/pg';
import { User } from '~/models/user';
import { CreateUserParams } from '~/types/dtos/user';

async function createUser({
  name,
  email,
  password
}: CreateUserParams): Promise<User | null> {
  const result = await database.query(
    'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *',
    [name, email, password],
  );

  const newUser: User = result.rows[0];

  return newUser;
}

export { createUser };
