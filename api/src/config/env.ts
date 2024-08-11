export const ENV_VARIABLES = {
  // General Variables
  NODE_ENV: process.env.NODE_ENV ?? "development",
  // POSTGRES Variables
  POSTGRES_DATABASE: process.env.POSTGRES_DATABASE ?? "",
  POSTGRES_HOST: process.env.POSTGRES_HOST ?? "",
  POSTGRES_USER: process.env.POSTGRES_USER ?? "",
  POSTGRES_PASSWORD: encodeURIComponent(process.env.POSTGRES_PASSWORD ?? ""),
  POSTGRES_PORT: Number(process.env.POSTGRES_PORT) ?? 5432,
  // Secrets/Hash Variables
  JWT_SECRET: process.env.JWT_SECRET ?? "",
};
