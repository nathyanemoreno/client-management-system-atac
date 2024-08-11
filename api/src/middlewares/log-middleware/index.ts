import morgan from "morgan";
import { ENV_VARIABLES } from "~/config/env";

const logMiddleware = morgan(
  ENV_VARIABLES.NODE_ENV === "development" ? "dev" : "short"
);

export { logMiddleware };
