
// export const DATABASE_URL = new sst.Secret("DATABASE_URL");

export const secrets = {
  DATABASE_URL: new sst.Secret("DATABASE_URL")
};

export const allSecrets = Object.values(secrets)