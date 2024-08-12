import { CalculateRouteController } from "~/controllers/calculate-route";
import { ClientsRepository } from "~/repositories/implementations/ClientsRepository";
import { CalculateClientRoute } from "~/use-cases/client/calculate-route";

// Initialize the repository
const clientRepository = new ClientsRepository();

// Initialize the use case with the repository
const calculateClientRoute = new CalculateClientRoute(clientRepository);

// Initialize the controller with the use case
const calculateRouteController = new CalculateRouteController(calculateClientRoute);

export { calculateRouteController };
