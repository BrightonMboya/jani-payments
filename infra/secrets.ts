/// <reference path="../.sst/platform/config.d.ts" />

export const secrets = {
  DATABASE_URL: new sst.Secret("DATABASE_URL"),
  NEXTAUTH_SECRET: new sst.Secret("NEXTAUTH_SECRET"),
};

export const allSecrets = Object.values(secrets);
