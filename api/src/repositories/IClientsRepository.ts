import { ListClientReqQuery } from '~/types/dtos/client';
import { Client } from '~/types/models/client';

export interface IClientsRepository {
  //create(data: ICreateClientRequestDTO): Promise<Client | null>;
  list(data: ListClientReqQuery): Promise<Client[] | null>;
  findById(id: string): Promise<Client | null>;
}
