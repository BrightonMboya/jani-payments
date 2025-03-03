/// <reference path="../.sst/platform/config.d.ts" />

export const secrets = {
  DATABASE_URL: new sst.Secret("DATABASE_URL"),
};

export const allSecrets = Object.values(secrets);
