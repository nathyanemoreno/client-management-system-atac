import bodyParser from 'body-parser';
import type { Express, Request, Response, NextFunction } from 'express';
import helmet from 'helmet';
import { corsMiddleware } from './middlewares/cors-middleware';
import { logMiddleware } from './middlewares/log-middleware';
import { router } from './router';

function configureServer(app: Express): void {
  app.use(helmet());
  app.use(logMiddleware);
  app.use(corsMiddleware);

  app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    if (err.isJoi) {
      // Check if it's a Joi validation error
      return res.status(400).json({
        error: err.details.map((detail: any) => detail.message),
      });
    }

    // Handle other types of errors
    res.status(500).json({ error: 'Internal Server Error' });
  });

  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }));

  // parse application/json
  app.use(bodyParser.json());

  app.use(router);
}

export { configureServer };
