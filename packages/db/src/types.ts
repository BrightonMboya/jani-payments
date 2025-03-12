import * as schema from "./db/schema";
import {
  createSelectSchema,
  createInsertSchema,
  createUpdateSchema,
} from "drizzle-zod";
import { z } from "zod";

export const addressSelectSchema = createSelectSchema(schema.addresses);
export const addressInsertSchema = createInsertSchema(schema.addresses);
export type IAddressInsertSchema = z.infer<typeof addressInsertSchema>;
export const UpdateAddressSchema = createUpdateSchema(schema.addresses)
  .partial()
  .strict();

export const customerSelectSchema = createSelectSchema(schema.Customers);
export const customerInsertSchema = createInsertSchema(schema.Customers);
export const customerUpdateSchema = createUpdateSchema(schema.Customers);

export const productsSelectSchema = createSelectSchema(schema.Products);
export const productsInsertSchema = createInsertSchema(schema.Products);
export type IProductsInsertSchema = z.infer<typeof productsInsertSchema>;
export const productsUpdateSchema = createUpdateSchema(schema.Products);

export const pricesSelectSchema = createSelectSchema(schema.Prices);
export const pricesInsertSchema = createInsertSchema(schema.Prices);
export const pricesUpdateSchema = createUpdateSchema(schema.Prices);

export const discountSelectSchema = createSelectSchema(schema.Discounts);
export const discountInsertSchema = createInsertSchema(schema.Discounts);
export const discountUpdateSchema = createUpdateSchema(schema.Discounts);

export const BillingInterval = schema.billingInterval.enumValues;
export const CollectionMode = schema.collectionMode.enumValues;
export const SubscriptionItemsStatus =
  schema.subscriptionItemsStatus.enumValues;
export const SubscriptionsStatus = schema.subscriptionsStatus;

export const SubChangesSelectSchema = createSelectSchema(
  schema.Subscription_Scheduled_Changes
);

export const Entity_Status = schema.entityStatus.enumValues;
export const PriceType = schema.priceType.enumValues;
