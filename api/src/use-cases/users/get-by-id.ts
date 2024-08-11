import { database } from '~/infra/database/pg';
import { User } from '~/models/user';

async function getUserById(id: string): Promise<User | null> {
  try {
    const result = await database.query('SELECT * FROM users WHERE id = $1', [
      id,
    ]);
    const user = result.rows[0]; 

    if (!user) {
      // Handle no found user
      console.error('Error finding user');
    }

    return user;
  } catch (error) {
    console.error('Error executing query', error);

    return null;
  }
}

export { getUserById };
