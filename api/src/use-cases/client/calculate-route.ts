// use-cases/client/calculateRoute.ts
import { ClientsRepository } from '~/repositories/implementations/ClientsRepository';
import { Client } from '~/types/models/client';
import { calculateRoute } from '~/utils/nearestNeighbor';

class CalculateClientRoute {
  constructor(private clientsRepository: ClientsRepository) {}

  // Simple nearest-neighbor route calculation (not optimal for complex routing)
  async execute(): Promise<Client[] | null> {
    const clients = await this.clientsRepository.list({
      limit: 10,
      offset: 10,
    });

    const result = await calculateRoute(clients!);

    return result;
  }
}

export { CalculateClientRoute };
