import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./db/schema";


// Disable prefetch as it is not supported for "Transaction" pool mode
export const client = postgres(process.env.DATABASE_URL!, { prepare: false });

// export const client = postgres(Resource.DATABASE_URL.value, { prepare: false });
export const db = drizzle(client, { schema });
export * as schema from "./db/schema";
export * from "./db/schema";
