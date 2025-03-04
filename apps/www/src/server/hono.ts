import  { type AppType } from "@repo/api";
import { hc } from "hono/client";



const client = hc<AppType>("");
       //^?

// type inference and code completion below is super slow af
client.products.