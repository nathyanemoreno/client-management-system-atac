import { database } from '~/infra/database/pg';
import { User } from '~/types/models/user';
import bcrypt from 'bcrypt';

async function getUserByEmailAndPassword(email: string, password: string): Promise<User | null> {
  try {
    const result = await database.query('SELECT * FROM users WHERE email = $1', [
      email,
    ]);
    const user = result.rows[0]; 

    if (!user) {
      // Handle no found user
      console.error('No user for email');
    }

    // Verify the password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      console.error('Invalid password');
      return null;
    }

    // Password is valid, return the user
    return user;

    return user;
  } catch (error) {
    console.error('Error executing query', error);

    return null;
  }
}

export { getUserByEmailAndPassword };
