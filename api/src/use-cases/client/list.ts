import { Client } from 'pg';
import { database } from '~/infra/database/pg';
import { ListClientReqQuery } from '~/types/dtos/client';

async function getClients({
  email,
  name,
  phone,
  limit,
  offset,
}: ListClientReqQuery): Promise<Client[] | null> {
  const filters: string[] = [];
  const queryParams: (string | number)[] = [];

  if (name) {
    queryParams.push(`%${name}%`);
    filters.push(`name ILIKE $${queryParams.length}`);
  }
  if (phone) {
    queryParams.push(`%${phone}%`);
    filters.push(`phone ILIKE $${queryParams.length}`);
  }
  if (email) {
    queryParams.push(`%${email}%`);
    filters.push(`email ILIKE $${queryParams.length}`);
  }

  const query = `
    SELECT * FROM client
    WHERE 1=1 ${filters.length ? `AND ${filters.join(' AND ')}` : ''}
    ${limit ? `LIMIT $${queryParams.push(limit)}` : ''}
    ${offset ? `OFFSET $${queryParams.push(offset)}` : ''}
  `;

  const { rows } = await database.query<Client>(query, queryParams);

  return rows.length ? rows : null;
}

export { getClients };
