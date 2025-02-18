import { relations, sql } from "drizzle-orm";
import {
  boolean,
  decimal,
  foreignKey,
  integer,
  jsonb,
  pgEnum,
  pgTable,
  primaryKey,
  text,
  timestamp,
  uniqueIndex,
  numeric,
  uuid,
} from "drizzle-orm/pg-core";


export const billingInterval = pgEnum("BillingInterval", [
  "day",
  "week",
  "month",
  "year",
]);
export const collectionMode = pgEnum("CollectionMode", ["automatic", "manual"]);
export const discountType = pgEnum("Discount_type", [
  "flat",
  "percentage",
  "flat_per_seat",
]);
export const entityStatus = pgEnum("Entity_Status", ["active", "archived"]);
export const paymentMethod = pgEnum("PaymentMethod", [
  "MOBILE_MONEY",
  "CARD",
  "BANK_TRANSFER",
]);
export const paymentProvider = pgEnum("PaymentProvider", [
  "MPESA",
  "AIRTEL",
  "MTN",
  "STRIPE",
  "PAYSTACK",
  "FLUTTERWAVE",
  "TIGO",
  "ORANGE",
  "DPO",
  "SELCOM",
]);
export const paymentStatus = pgEnum("PaymentStatus", [
  "PENDING",
  "PROCESSING",
  "COMPLETED",
  "FAILED",
  "REFUNDED",
]);
export const priceType = pgEnum("PriceType", ["standard", "custom"]);
export const role = pgEnum("Role", ["owner", "member"]);
export const scheduledChangeAction = pgEnum("ScheduledChangeAction", [
  "pause",
  "resume",
  "cancel",
]);
export const scheduledChangesStatus = pgEnum("ScheduledChangesStatus", [
  "completed",
  "scheduled",
]);
export const subscriptionItemsStatus = pgEnum("SubscriptionItemsStatus", [
  "active",
  "inactive",
  "trialing",
]);
export const subscriptionsStatus = pgEnum("SubscriptionsStatus", [
  "active",
  "cancelled",
  "past_due",
  "paused",
  "trial",
]);
export const transactionStatus = pgEnum("TransactionStatus", [
  "billed",
  "cancelled",
]);
export const productStatus = pgEnum("product_status", ["active", "archived"]);

export const ProjectUsers = pgTable(
  "ProjectUsers",
  {
    id: text().primaryKey().notNull(),
    role: role().default("member").notNull(),
    createdAt: timestamp({ precision: 3, mode: "string" })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp({ precision: 3, mode: "string" }).notNull(),
    userId: text().notNull(),
    projectId: text().notNull(),
  },
  (table) => [
    uniqueIndex("ProjectUsers_userId_projectId_key").using(
      "btree",
      table.userId.asc().nullsLast().op("text_ops"),
      table.projectId.asc().nullsLast().op("text_ops")
    ),
  ]
);

export const Transactions = pgTable("Transactions", {
  id: text().primaryKey().notNull(),
  status: transactionStatus().notNull(),
  customer_id: text("customer_id").notNull(),
  address_id: text("address_id").notNull(),
  project_id: text("project_id").notNull(),
  product_id: text("product_id").notNull(),
  subscription_id: text("subscription_id"),
  subtotal: numeric({ precision: 65, scale: 30 }).notNull(),
  discountAmmount: numeric("discount_ammount", {
    precision: 65,
    scale: 30,
  }).notNull(),
  total: numeric({ precision: 65, scale: 30 }).notNull(),
  grandTotal: numeric("grand_total", { precision: 65, scale: 30 }).notNull(),
  discount_id: text("discount_id"),
  invoice_id: text("invoice_id").notNull(),
  currentPeriodStarts: timestamp("current_period_starts", {
    precision: 3,
    mode: "string",
  }),
  currentPeriodEnds: timestamp("current_period_ends", {
    precision: 3,
    mode: "string",
  }),
  customData: jsonb("custom_data"),
  currencyCode: text("currency_code").notNull(),
  collectionMode: collectionMode("collection_mode").notNull(),
  createdAt: timestamp("created_at", { precision: 3, mode: "string" })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updated_at", { precision: 3, mode: "string" }),
});

export const TransactionPayment = pgTable("TransactionPayment", {
  id: text().primaryKey().notNull(),
  transaction_id: text("transaction_id").notNull(),
  paymentMethod: paymentMethod("payment_method").notNull(),
  paymentProvider: paymentProvider("payment_provider").notNull(),
  status: paymentStatus().default("PENDING").notNull(),
  amount: numeric({ precision: 65, scale: 30 }).notNull(),
  currencyCode: text("currency_code").notNull(),
  mobileNetwork: text("mobile_network"),
  phoneSuffix: text("phone_suffix"),
  cardLast4: text("card_last4"),
  cardBrand: text("card_brand"),
  cardExpMonth: integer("card_exp_month"),
  cardExpYear: integer("card_exp_year"),
  cardHolderName: text("card_holder_name"),
  bankReference: text("bank_reference"),
  bankName: text("bank_name"),
  providerReference: text("provider_reference"),
  providerMetadata: jsonb("provider_metadata"),
  errorMessage: text("error_message"),
  createdAt: timestamp("created_at", { precision: 3, mode: "string" })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updated_at", { precision: 3, mode: "string" }),
});

export const TransactionItems = pgTable("TransactionItems", {
  id: text().primaryKey().notNull(),
  price_id: text("price_id").notNull(),
  quantity: integer().notNull(),
  transactionsId: text(),
});

export const CheckoutItems = pgTable("CheckoutItems", {
  id: text().primaryKey().notNull(),
  price_id: text("price_id").notNull(),
  quantity: integer().notNull(),
  checkoutId: text().notNull(),
});

export const Checkouts = pgTable("Checkouts", {
  id: text().primaryKey().notNull(),
  customer_id: text("customer_id").notNull(),
  project_id: text("project_id").notNull(),
  createdAt: timestamp("created_at", { precision: 3, mode: "string" })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  discount_id: text("discount_id"),
  discountAmmount: numeric("discount_ammount", {
    precision: 65,
    scale: 30,
  }).notNull(),
  grandTotal: numeric("grand_total", { precision: 65, scale: 30 }).notNull(),
  total: numeric({ precision: 65, scale: 30 }).notNull(),
});

export const user = pgTable("User", {
  id: text().primaryKey().notNull(),
  name: text(),
  email: text(),
  emailVerified: timestamp({ precision: 3, mode: "string" }),
  image: text(),
  source: text(),
  defaultWorkspace: text(),
  createdAt: timestamp({ precision: 3, mode: "string" })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp({ precision: 3, mode: "string" }).notNull(),
});

export const projectInvite = pgTable(
  "ProjectInvite",
  {
    email: text().notNull(),
    expires: timestamp({ precision: 3, mode: "string" }).notNull(),
    projectId: text().notNull(),
    createdAt: timestamp({ precision: 3, mode: "string" })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
  },
  (table) => [
    uniqueIndex("ProjectInvite_email_projectId_key").using(
      "btree",
      table.email.asc().nullsLast().op("text_ops"),
      table.projectId.asc().nullsLast().op("text_ops")
    ),
  ]
);

export const Products = pgTable("Products", {
  id: text().notNull(),
  name: text().notNull(),
  description: text().notNull(),
  status: productStatus().default("active").notNull(),
  createdAt: timestamp({ precision: 3, mode: "string" })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp({ precision: 3, mode: "string" }).notNull(),
  customData: jsonb("custom_data"),
  projectId: text("project_id").notNull(),
});

export const SentEmail = pgTable("SentEmail", {
  id: text().primaryKey().notNull(),
  type: text().notNull(),
  createdAt: timestamp({ precision: 3, mode: "string" })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  projectId: text(),
});

export const Account = pgTable("Account", {
  userId: text().notNull(),
  type: text().notNull(),
  provider: text().notNull(),
  providerAccountId: text().notNull(),
  refreshToken: text("refresh_token"),
  accessToken: text("access_token"),
  expiresAt: integer("expires_at"),
  tokenType: text("token_type"),
  scope: text(),
  idToken: text("id_token"),
  sessionState: text("session_state"),
  createdAt: timestamp({ precision: 3, mode: "string" })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp({ precision: 3, mode: "string" }).notNull(),
});

export const session = pgTable("Session", {
  sessionToken: text().notNull(),
  userId: text().notNull(),
  expires: timestamp({ precision: 3, mode: "string" }).notNull(),
  createdAt: timestamp({ precision: 3, mode: "string" })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp({ precision: 3, mode: "string" }).notNull(),
});

export const Prices = pgTable("Prices", {
  id: text().primaryKey().notNull(),
  type: priceType().default("standard").notNull(),
  description: text(),
  name: text().notNull(),
  billingCycleFrequency: integer("billing_cycle_frequency").notNull(),
  billingCycleInterval: billingInterval("billing_cycle_interval").notNull(),
  trialPeriodFrequency: integer("trial_period_frequency").notNull(),
  trialPeriodInterval: billingInterval("trial_period_interval").notNull(),
  amount: numeric({ precision: 65, scale: 30 }).notNull(),
  currencyCode: text("currency_code").notNull(),
  customData: jsonb("custom_data"),
  status: entityStatus().notNull(),
  createdAt: timestamp("created_at", {
    precision: 3,
    mode: "string",
  }).notNull(),
  updatedAt: timestamp("updated_at", {
    precision: 3,
    mode: "string",
  }).notNull(),
  product_id: text("product_id").notNull(),
  projectId: text().notNull(),
});

export const Discounts = pgTable("Discounts", {
  id: text().primaryKey().notNull(),
  status: entityStatus().default("active").notNull(),
  description: text(),
  enabledForCheckout: boolean("enabled_for_checkout"),
  amount: numeric({ precision: 65, scale: 30 }).notNull(),
  currencyCode: text("currency_code").notNull(),
  type: discountType().notNull(),
  recur: boolean(),
  maxRecurringIntervals: numeric("max_recurring_intervals", {
    precision: 65,
    scale: 30,
  }),
  usageLimit: integer("usage_limit"),
  expiresAt: timestamp("expires_at", { precision: 3, mode: "string" }),
  customData: jsonb("custom_data"),
  timesUsed: integer("times_used").default(0),
  createdAt: timestamp("created_at", {
    precision: 3,
    mode: "string",
  }).notNull(),
  updatedAt: timestamp("updated_at", {
    precision: 3,
    mode: "string",
  }).notNull(),
  projectId: text(),
});

export const Project = pgTable("Project", {
  id: text().primaryKey().notNull(),
  name: text().notNull(),
  slug: text().notNull(),
  logo: text(),
  plan: text().default("free").notNull(),
  billingCycleStart: integer().notNull(),
  inviteCode: text(),
  createdAt: timestamp({ precision: 3, mode: "string" })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp({ precision: 3, mode: "string" }).notNull(),
  usageLastChecked: timestamp({ precision: 3, mode: "string" })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  paymentProvider: paymentProvider().default("PAYSTACK").notNull(),
});

export const apiKeys = pgTable("Api_keys", {
  id: text().notNull(),
  prefix: text(),
  description: text(),
  createdAt: timestamp({ precision: 3, mode: "string" })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  key: text().notNull(),
  userId: text().notNull(),
  project_id: text("project_id"),
});

export const verificationToken = pgTable("VerificationToken", {
  identifier: text().notNull(),
  token: text().notNull(),
  expires: timestamp({ precision: 3, mode: "string" }).notNull(),
});

export const Subscription_Scheduled_Changes = pgTable(
  "Subscription_Scheduled_Changes",
  {
    id: text().primaryKey().notNull(),
    subscription_id: text("subscription_id").notNull(),
    action: scheduledChangeAction().notNull(),
    effectiveAt: timestamp("effective_at", {
      precision: 3,
      mode: "string",
    }).notNull(),
    resumesAt: timestamp("resumes_at", { precision: 3, mode: "string" }),
    status: scheduledChangesStatus().default("scheduled").notNull(),
  }
);

export const DiscountPrices = pgTable("Discount_Prices", {
  discount_id: text("discount_Id").notNull(),
  price_id: text("price_id").notNull(),
});

export const Customers = pgTable("Customers", {
  id: text().primaryKey().notNull(),
  email: text().notNull(),
  name: text().notNull(),
  status: entityStatus().default("active").notNull(),
  description: text(),
  customData: jsonb("custom_data"),
  createdAt: timestamp("created_at", {
    precision: 3,
    mode: "string",
  }).notNull(),
  updatedAt: timestamp("updated_at", {
    precision: 3,
    mode: "string",
  }).notNull(),
  projectId: text(),
});

export const addresses = pgTable("Addresses", {
  id: text().primaryKey().notNull(),
  description: text(),
  firstLine: text("first_line"),
  custom_data: jsonb("custom_data"),
  city: text(),
  status: entityStatus().default("active").notNull(),
  createdAt: timestamp("created_at", { precision: 3, mode: "string" })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updated_at: timestamp("updated_at", {
    precision: 3,
    mode: "string",
  }).notNull(),
  customer_id: text("customer_id"),
});

export const Subscriptions = pgTable("Subscriptions", {
  id: text().primaryKey().notNull(),
  status: subscriptionsStatus().notNull(),
  currencyCode: text("currency_code").notNull(),
  createdAt: timestamp("created_at", { precision: 3, mode: "string" })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updated_at", {
    precision: 3,
    mode: "string",
  }).notNull(),
  startedAt: timestamp("started_at", { precision: 3, mode: "string" }),
  firstBilledAt: timestamp("first_billed_at", { precision: 3, mode: "string" }),
  nextBilledAt: timestamp("next_billed_at", { precision: 3, mode: "string" }),
  pausedAt: timestamp("paused_at", { precision: 3, mode: "string" }),
  canceledAt: timestamp("canceled_at", { precision: 3, mode: "string" }),
  currentPeriodStarts: timestamp("current_period_starts", {
    precision: 3,
    mode: "string",
  }),
  currentPeriodEnds: timestamp("current_period_ends", {
    precision: 3,
    mode: "string",
  }),
  billingCycleInterval: billingInterval("billing_cycle_interval").notNull(),
  billingCycleFrequency: integer("billing_cycle_frequency").notNull(),
  updatePaymentMethodUrl: text("update_payment_method_url"),
  cancelUrl: text("cancel_url"),
  customer_id: text("customer_id").notNull(),
  address_id: text("address_id").notNull(),
  project_id: text("project_id").notNull(),
  discount_id: text("discount_id"),
  collectionMode: collectionMode("collection_mode").notNull(),
});

export const SubscriptionItems = pgTable("SubscriptionItems", {
  id: text().primaryKey().notNull(),
  subscription_id: text("subscription_id").notNull(),
  price_id: text("price_id").notNull(),
  quantity: integer().notNull(),
  status: subscriptionItemsStatus().notNull(),
  recurring: boolean().notNull(),
  createdAt: timestamp("created_at", { precision: 3, mode: "string" })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updated_at", {
    precision: 3,
    mode: "string",
  }).notNull(),
  previouslyBilledAt: timestamp("previously_billed_at", {
    precision: 3,
    mode: "string",
  }),
  nextBilledAt: timestamp("next_billed_at", { precision: 3, mode: "string" }),
  trialStartedAt: timestamp("trial_started_at", {
    precision: 3,
    mode: "string",
  }),
  trialEndedAt: timestamp("trial_ended_at", { precision: 3, mode: "string" }),
  customData: jsonb("custom_data"),
});

export const BillingDetails = pgTable("BillingDetails", {
  id: text().primaryKey().notNull(),
  subscription_id: text("subscription_id").notNull(),
  paymentInterval: billingInterval("payment_interval").notNull(),
  paymentFrequency: integer("payment_frequency").notNull(),
  enableCheckout: boolean("enable_checkout").default(false).notNull(),
  purchaseOrderNumber: text("purchase_order_number"),
  additionalInformation: text("additional_information"),
  createdAt: timestamp("created_at", { precision: 3, mode: "string" })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updated_at", {
    precision: 3,
    mode: "string",
  }).notNull(),
});

export const ProjectRelations = relations(Project, ({ many }) => ({
  users: many(ProjectUsers, {
    relationName: "ProjectToProjectUsers",
  }),
  invites: many(projectInvite, {
    relationName: "ProjectToProjectInvite",
  }),
  sentEmails: many(SentEmail, {
    relationName: "ProjectToSentEmail",
  }),
  products: many(Products, {
    relationName: "ProductsToProject",
  }),
  prices: many(Prices, {
    relationName: "PricesToProject",
  }),
  discounts: many(Discounts, {
    relationName: "DiscountsToProject",
  }),
  customers: many(Customers, {
    relationName: "CustomersToProject",
  }),
  Subscriptions: many(Subscriptions, {
    relationName: "ProjectToSubscriptions",
  }),
  Transactions: many(Transactions, {
    relationName: "ProjectToTransactions",
  }),
  Api_keys: many(apiKeys, {
    relationName: "Api_keysToProject",
  }),
  Checkouts: many(Checkouts, {
    relationName: "CheckoutsToProject",
  }),
}));

export const ProjectUsersRelations = relations(ProjectUsers, ({ one }) => ({
  user: one(user, {
    relationName: "ProjectUsersToUser",
    fields: [ProjectUsers.userId],
    references: [user.id],
  }),
  project: one(Project, {
    relationName: "ProjectToProjectUsers",
    fields: [ProjectUsers.projectId],
    references: [Project.id],
  }),
}));

export const ProjectInviteRelations = relations(projectInvite, ({ one }) => ({
  project: one(Project, {
    relationName: "ProjectToProjectInvite",
    fields: [projectInvite.projectId],
    references: [Project.id],
  }),
}));

export const SentEmailRelations = relations(SentEmail, ({ one }) => ({
  project: one(Project, {
    relationName: "ProjectToSentEmail",
    fields: [SentEmail.projectId],
    references: [Project.id],
  }),
}));

export const UserRelations = relations(user, ({ many }) => ({
  accounts: many(Account, {
    relationName: "AccountToUser",
  }),
  ProjectUsers: many(ProjectUsers, {
    relationName: "ProjectUsersToUser",
  }),
  sessions: many(session, {
    relationName: "SessionToUser",
  }),
  api_keys: many(apiKeys, {
    relationName: "Api_keysToUser",
  }),
}));

export const AccountRelations = relations(Account, ({ one }) => ({
  user: one(user, {
    relationName: "AccountToUser",
    fields: [Account.userId],
    references: [user.id],
  }),
}));

export const SessionRelations = relations(session, ({ one }) => ({
  user: one(user, {
    relationName: "SessionToUser",
    fields: [session.userId],
    references: [user.id],
  }),
}));

export const ProductsRelations = relations(Products, ({ one, many }) => ({
  Project: one(Project, {
    relationName: "ProductsToProject",
    fields: [Products.projectId],
    references: [Project.id],
  }),
  prices: many(Prices, {
    relationName: "PricesToProducts",
  }),
  Transactions: many(Transactions, {
    relationName: "ProductsToTransactions",
  }),
}));

export const Api_keysRelations = relations(apiKeys, ({ one }) => ({
  User: one(user, {
    relationName: "Api_keysToUser",
    fields: [apiKeys.userId],
    references: [user.id],
  }),
  Project: one(Project, {
    relationName: "Api_keysToProject",
    fields: [apiKeys.project_id],
    references: [Project.id],
  }),
}));

export const PricesRelations = relations(Prices, ({ one, many }) => ({
  Products: one(Products, {
    relationName: "PricesToProducts",
    fields: [Prices.product_id],
    references: [Products.id],
  }),
  Project: one(Project, {
    relationName: "PricesToProject",
    fields: [Prices.projectId],
    references: [Project.id],
  }),
  Discount_Prices: many(DiscountPrices, {
    relationName: "Discount_PricesToPrices",
  }),
  Subscription_Items: many(SubscriptionItems, {
    relationName: "PricesToSubscriptionItems",
  }),
  TransactionItems: many(TransactionItems, {
    relationName: "PricesToTransactionItems",
  }),
  CheckoutItems: many(CheckoutItems, {
    relationName: "CheckoutItemsToPrices",
  }),
}));

export const DiscountsRelations = relations(Discounts, ({ many, one }) => ({
  discount_prices: many(DiscountPrices, {
    relationName: "Discount_PricesToDiscounts",
  }),
  Project: one(Project, {
    relationName: "DiscountsToProject",
    fields: [Discounts.projectId],
    references: [Project.id],
  }),
  Subscriptions: many(Subscriptions, {
    relationName: "DiscountsToSubscriptions",
  }),
  Transactions: many(Transactions, {
    relationName: "DiscountsToTransactions",
  }),
  Checkouts: many(Checkouts, {
    relationName: "CheckoutsToDiscounts",
  }),
}));

export const Discount_PricesRelations = relations(
  DiscountPrices,
  ({ one }) => ({
    discount: one(Discounts, {
      relationName: "Discount_PricesToDiscounts",
      fields: [DiscountPrices.discount_id],
      references: [Discounts.id],
    }),
    price: one(Prices, {
      relationName: "Discount_PricesToPrices",
      fields: [DiscountPrices.price_id],
      references: [Prices.id],
    }),
  })
);

export const CustomersRelations = relations(Customers, ({ one, many }) => ({
  Project: one(Project, {
    relationName: "CustomersToProject",
    fields: [Customers.projectId],
    references: [Project.id],
  }),
  Addresses: many(addresses, {
    relationName: "AddressesToCustomers",
  }),
  Subscriptions: many(Subscriptions, {
    relationName: "CustomersToSubscriptions",
  }),
  Transactions: many(Transactions, {
    relationName: "CustomersToTransactions",
  }),
  Checkouts: many(Checkouts, {
    relationName: "CheckoutsToCustomers",
  }),
}));

export const AddressesRelations = relations(addresses, ({ one, many }) => ({
  Customers: one(Customers, {
    relationName: "AddressesToCustomers",
    fields: [addresses.customer_id],
    references: [Customers.id],
  }),
  Subscriptions: many(Subscriptions, {
    relationName: "AddressesToSubscriptions",
  }),
  Transactions: many(Transactions, {
    relationName: "AddressesToTransactions",
  }),
}));

export const SubscriptionItemsRelations = relations(
  SubscriptionItems,
  ({ one }) => ({
    subscription: one(Subscriptions, {
      relationName: "SubscriptionItemsToSubscriptions",
      fields: [SubscriptionItems.subscription_id],
      references: [Subscriptions.id],
    }),
    price: one(Prices, {
      relationName: "PricesToSubscriptionItems",
      fields: [SubscriptionItems.price_id],
      references: [Prices.id],
    }),
  })
);

export const Subscription_Scheduled_ChangesRelations = relations(
  Subscription_Scheduled_Changes,
  ({ one }) => ({
    subscription: one(Subscriptions, {
      relationName: "Subscription_Scheduled_ChangesToSubscriptions",
      fields: [Subscription_Scheduled_Changes.subscription_id],
      references: [Subscriptions.id],
    }),
  })
);

export const BillingDetailsRelations = relations(BillingDetails, ({ one }) => ({
  subscription: one(Subscriptions, {
    relationName: "BillingDetailsToSubscriptions",
    fields: [BillingDetails.subscription_id],
    references: [Subscriptions.id],
  }),
}));

export const SubscriptionsRelations = relations(
  Subscriptions,
  ({ one, many }) => ({
    customer: one(Customers, {
      relationName: "CustomersToSubscriptions",
      fields: [Subscriptions.customer_id],
      references: [Customers.id],
    }),
    address: one(addresses, {
      relationName: "AddressesToSubscriptions",
      fields: [Subscriptions.address_id],
      references: [addresses.id],
    }),
    project: one(Project, {
      relationName: "ProjectToSubscriptions",
      fields: [Subscriptions.project_id],
      references: [Project.id],
    }),
    discount: one(Discounts, {
      relationName: "DiscountsToSubscriptions",
      fields: [Subscriptions.discount_id],
      references: [Discounts.id],
    }),
    Subscription_Items: many(SubscriptionItems, {
      relationName: "SubscriptionItemsToSubscriptions",
    }),
    Subscription_Scheduled_Changes: many(Subscription_Scheduled_Changes, {
      relationName: "Subscription_Scheduled_ChangesToSubscriptions",
    }),
    BillingDetails: many(BillingDetails, {
      relationName: "BillingDetailsToSubscriptions",
    }),
    transaction: many(Transactions, {
      relationName: "SubscriptionsToTransactions",
    }),
  })
);

export const TransactionItemsRelations = relations(
  TransactionItems,
  ({ one }) => ({
    price: one(Prices, {
      relationName: "PricesToTransactionItems",
      fields: [TransactionItems.price_id],
      references: [Prices.id],
    }),
    Transactions: one(Transactions, {
      relationName: "TransactionItemsToTransactions",
      fields: [TransactionItems.transactionsId],
      references: [Transactions.id],
    }),
  })
);

export const TransactionPaymentRelations = relations(
  TransactionPayment,
  ({ one }) => ({
    transaction: one(Transactions, {
      relationName: "TransactionPaymentToTransactions",
      fields: [TransactionPayment.transaction_id],
      references: [Transactions.id],
    }),
  })
);

export const TransactionsRelations = relations(
  Transactions,
  ({ one, many }) => ({
    customer: one(Customers, {
      relationName: "CustomersToTransactions",
      fields: [Transactions.customer_id],
      references: [Customers.id],
    }),
    address: one(addresses, {
      relationName: "AddressesToTransactions",
      fields: [Transactions.address_id],
      references: [addresses.id],
    }),
    project: one(Project, {
      relationName: "ProjectToTransactions",
      fields: [Transactions.project_id],
      references: [Project.id],
    }),
    product: one(Products, {
      relationName: "ProductsToTransactions",
      fields: [Transactions.product_id],
      references: [Products.id],
    }),
    subscription: one(Subscriptions, {
      relationName: "SubscriptionsToTransactions",
      fields: [Transactions.subscription_id],
      references: [Subscriptions.id],
    }),
    TransactionPayment: many(TransactionPayment, {
      relationName: "TransactionPaymentToTransactions",
    }),
    transactionItems: many(TransactionItems, {
      relationName: "TransactionItemsToTransactions",
    }),
    discount: one(Discounts, {
      relationName: "DiscountsToTransactions",
      fields: [Transactions.discount_id],
      references: [Discounts.id],
    }),
  })
);

export const CheckoutsRelations = relations(Checkouts, ({ one, many }) => ({
  customer: one(Customers, {
    relationName: "CheckoutsToCustomers",
    fields: [Checkouts.customer_id],
    references: [Customers.id],
  }),
  project: one(Project, {
    relationName: "CheckoutsToProject",
    fields: [Checkouts.project_id],
    references: [Project.id],
  }),
  checkoutItems: many(CheckoutItems, {
    relationName: "CheckoutItemsToCheckouts",
  }),
  discount: one(Discounts, {
    relationName: "CheckoutsToDiscounts",
    fields: [Checkouts.discount_id],
    references: [Discounts.id],
  }),
}));

export const CheckoutItemsRelations = relations(CheckoutItems, ({ one }) => ({
  price: one(Prices, {
    relationName: "CheckoutItemsToPrices",
    fields: [CheckoutItems.price_id],
    references: [Prices.id],
  }),
  checkouts: one(Checkouts, {
    relationName: "CheckoutItemsToCheckouts",
    fields: [CheckoutItems.checkoutId],
    references: [Checkouts.id],
  }),
}));
