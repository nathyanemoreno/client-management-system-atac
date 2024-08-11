import { ENV_VARIABLES } from '~/config/env';
import { Pool } from 'pg';

const pool = new Pool({
  user: ENV_VARIABLES.POSTGRES_USER,
  host: ENV_VARIABLES.POSTGRES_HOST,
  database: ENV_VARIABLES.POSTGRES_DATABASE,
  password: ENV_VARIABLES.POSTGRES_PASSWORD,
  port: ENV_VARIABLES.POSTGRES_PORT,
});

export { pool as database };
