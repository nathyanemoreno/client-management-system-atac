// controllers/calculate-route/index.ts
import { Request, Response } from "express";
import { CalculateClientRoute } from "~/use-cases/client/calculate-route";

class CalculateRouteController {
  constructor(private calculateRoute: CalculateClientRoute) {}

  handle = async (req: Request, res: Response): Promise<Response> => {
    try {
      const route = await this.calculateRoute.execute();
      console.log(route);
      return res.status(200).json(route);
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  };
}

export { CalculateRouteController };
