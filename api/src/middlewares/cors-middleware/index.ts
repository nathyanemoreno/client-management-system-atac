import cors, { CorsOptions } from "cors";

const corsOptions: CorsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};

const corsMiddleware = cors(corsOptions);

export { corsMiddleware };
