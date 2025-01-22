
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime
} = require('./runtime/wasm.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.2.1
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "6.2.1",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}





/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.ProjectScalarFieldEnum = {
  id: 'id',
  name: 'name',
  slug: 'slug',
  logo: 'logo',
  plan: 'plan',
  billingCycleStart: 'billingCycleStart',
  inviteCode: 'inviteCode',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  usageLastChecked: 'usageLastChecked'
};

exports.Prisma.ProjectUsersScalarFieldEnum = {
  id: 'id',
  role: 'role',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  userId: 'userId',
  projectId: 'projectId'
};

exports.Prisma.ProjectInviteScalarFieldEnum = {
  email: 'email',
  expires: 'expires',
  projectId: 'projectId',
  createdAt: 'createdAt'
};

exports.Prisma.SentEmailScalarFieldEnum = {
  id: 'id',
  type: 'type',
  createdAt: 'createdAt',
  projectId: 'projectId'
};

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  emailVerified: 'emailVerified',
  image: 'image',
  source: 'source',
  defaultWorkspace: 'defaultWorkspace',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.AccountScalarFieldEnum = {
  userId: 'userId',
  type: 'type',
  provider: 'provider',
  providerAccountId: 'providerAccountId',
  refresh_token: 'refresh_token',
  access_token: 'access_token',
  expires_at: 'expires_at',
  token_type: 'token_type',
  scope: 'scope',
  id_token: 'id_token',
  session_state: 'session_state',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SessionScalarFieldEnum = {
  sessionToken: 'sessionToken',
  userId: 'userId',
  expires: 'expires',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.VerificationTokenScalarFieldEnum = {
  identifier: 'identifier',
  token: 'token',
  expires: 'expires'
};

exports.Prisma.ProductsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  status: 'status',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  custom_data: 'custom_data',
  project_id: 'project_id'
};

exports.Prisma.Api_keysScalarFieldEnum = {
  id: 'id',
  prefix: 'prefix',
  description: 'description',
  createdAt: 'createdAt',
  key: 'key',
  userId: 'userId'
};

exports.Prisma.PricesScalarFieldEnum = {
  id: 'id',
  type: 'type',
  description: 'description',
  name: 'name',
  billing_cycle_frequency: 'billing_cycle_frequency',
  billing_cycle_interval: 'billing_cycle_interval',
  trial_period_frequency: 'trial_period_frequency',
  trial_period_interval: 'trial_period_interval',
  amount: 'amount',
  currency_code: 'currency_code',
  custom_data: 'custom_data',
  status: 'status',
  created_at: 'created_at',
  updated_at: 'updated_at',
  product_id: 'product_id',
  projectId: 'projectId'
};

exports.Prisma.DiscountsScalarFieldEnum = {
  id: 'id',
  status: 'status',
  description: 'description',
  enabled_for_checkout: 'enabled_for_checkout',
  amount: 'amount',
  currency_code: 'currency_code',
  type: 'type',
  recur: 'recur',
  max_recurring_intervals: 'max_recurring_intervals',
  usage_limit: 'usage_limit',
  expires_at: 'expires_at',
  custom_data: 'custom_data',
  times_used: 'times_used',
  created_at: 'created_at',
  updated_at: 'updated_at',
  projectId: 'projectId'
};

exports.Prisma.Discount_PricesScalarFieldEnum = {
  discount_Id: 'discount_Id',
  price_id: 'price_id'
};

exports.Prisma.CustomersScalarFieldEnum = {
  id: 'id',
  email: 'email',
  name: 'name',
  status: 'status',
  description: 'description',
  custom_data: 'custom_data',
  created_at: 'created_at',
  updated_at: 'updated_at',
  projectId: 'projectId'
};

exports.Prisma.AddressesScalarFieldEnum = {
  id: 'id',
  description: 'description',
  first_line: 'first_line',
  custom_data: 'custom_data',
  city: 'city',
  status: 'status',
  created_at: 'created_at',
  updated_at: 'updated_at',
  customer_id: 'customer_id'
};

exports.Prisma.SubscriptionItemsScalarFieldEnum = {
  id: 'id',
  subscription_id: 'subscription_id',
  price_id: 'price_id',
  quantity: 'quantity',
  status: 'status',
  recurring: 'recurring',
  created_at: 'created_at',
  updated_at: 'updated_at',
  previously_billed_at: 'previously_billed_at',
  next_billed_at: 'next_billed_at',
  trial_started_at: 'trial_started_at',
  trial_ended_at: 'trial_ended_at',
  custom_data: 'custom_data'
};

exports.Prisma.Subscription_Scheduled_ChangesScalarFieldEnum = {
  id: 'id',
  subscription_id: 'subscription_id',
  action: 'action',
  effective_at: 'effective_at',
  resumes_at: 'resumes_at',
  status: 'status'
};

exports.Prisma.BillingDetailsScalarFieldEnum = {
  id: 'id',
  subscription_id: 'subscription_id',
  payment_interval: 'payment_interval',
  payment_frequency: 'payment_frequency',
  enable_checkout: 'enable_checkout',
  purchase_order_number: 'purchase_order_number',
  additional_information: 'additional_information',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.SubscriptionsScalarFieldEnum = {
  id: 'id',
  status: 'status',
  currency_code: 'currency_code',
  created_at: 'created_at',
  updated_at: 'updated_at',
  started_at: 'started_at',
  first_billed_at: 'first_billed_at',
  next_billed_at: 'next_billed_at',
  paused_at: 'paused_at',
  canceled_at: 'canceled_at',
  current_period_starts: 'current_period_starts',
  current_period_ends: 'current_period_ends',
  billing_cycle_interval: 'billing_cycle_interval',
  billing_cycle_frequency: 'billing_cycle_frequency',
  update_payment_method_url: 'update_payment_method_url',
  cancel_url: 'cancel_url',
  customer_id: 'customer_id',
  address_id: 'address_id',
  project_id: 'project_id',
  discount_id: 'discount_id',
  collection_mode: 'collection_mode'
};

exports.Prisma.TransactionItemsScalarFieldEnum = {
  id: 'id',
  price_id: 'price_id',
  quantity: 'quantity',
  transactionsId: 'transactionsId'
};

exports.Prisma.TransactionPaymentScalarFieldEnum = {
  id: 'id',
  transaction_id: 'transaction_id',
  payment_method: 'payment_method',
  payment_provider: 'payment_provider',
  status: 'status',
  amount: 'amount',
  currency_code: 'currency_code',
  mobile_network: 'mobile_network',
  phone_suffix: 'phone_suffix',
  card_last4: 'card_last4',
  card_brand: 'card_brand',
  card_exp_month: 'card_exp_month',
  card_exp_year: 'card_exp_year',
  card_holder_name: 'card_holder_name',
  bank_reference: 'bank_reference',
  bank_name: 'bank_name',
  provider_reference: 'provider_reference',
  provider_metadata: 'provider_metadata',
  error_message: 'error_message',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.TransactionsScalarFieldEnum = {
  id: 'id',
  status: 'status',
  customer_id: 'customer_id',
  address_id: 'address_id',
  project_id: 'project_id',
  product_id: 'product_id',
  subscription_id: 'subscription_id',
  subtotal: 'subtotal',
  discount_ammount: 'discount_ammount',
  total: 'total',
  grand_total: 'grand_total',
  discount_id: 'discount_id',
  invoice_id: 'invoice_id',
  current_period_starts: 'current_period_starts',
  current_period_ends: 'current_period_ends',
  custom_data: 'custom_data',
  currency_code: 'currency_code',
  collection_mode: 'collection_mode',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};
exports.Role = exports.$Enums.Role = {
  owner: 'owner',
  member: 'member'
};

exports.product_status = exports.$Enums.product_status = {
  active: 'active',
  archived: 'archived'
};

exports.Entity_Status = exports.$Enums.Entity_Status = {
  active: 'active',
  archived: 'archived'
};

exports.PriceType = exports.$Enums.PriceType = {
  standard: 'standard',
  custom: 'custom'
};

exports.BillingInterval = exports.$Enums.BillingInterval = {
  day: 'day',
  week: 'week',
  month: 'month',
  year: 'year'
};

exports.Discount_type = exports.$Enums.Discount_type = {
  flat: 'flat',
  percentage: 'percentage',
  flat_per_seat: 'flat_per_seat'
};

exports.SubscriptionsStatus = exports.$Enums.SubscriptionsStatus = {
  active: 'active',
  cancelled: 'cancelled',
  past_due: 'past_due',
  paused: 'paused',
  trial: 'trial'
};

exports.CollectionMode = exports.$Enums.CollectionMode = {
  automatic: 'automatic',
  manual: 'manual'
};

exports.SubscriptionItemsStatus = exports.$Enums.SubscriptionItemsStatus = {
  active: 'active',
  inactive: 'inactive',
  trialing: 'trialing'
};

exports.ScheduledChangeAction = exports.$Enums.ScheduledChangeAction = {
  pause: 'pause',
  resume: 'resume',
  cancel: 'cancel'
};

exports.ScheduledChangesStatus = exports.$Enums.ScheduledChangesStatus = {
  completed: 'completed',
  scheduled: 'scheduled'
};

exports.TransactionStatus = exports.$Enums.TransactionStatus = {
  billed: 'billed',
  cancelled: 'cancelled'
};

exports.PaymentMethod = exports.$Enums.PaymentMethod = {
  MOBILE_MONEY: 'MOBILE_MONEY',
  CARD: 'CARD',
  BANK_TRANSFER: 'BANK_TRANSFER'
};

exports.PaymentProvider = exports.$Enums.PaymentProvider = {
  MPESA: 'MPESA',
  AIRTEL: 'AIRTEL',
  MTN: 'MTN',
  STRIPE: 'STRIPE',
  PAYSTACK: 'PAYSTACK',
  FLUTTERWAVE: 'FLUTTERWAVE',
  TIGO: 'TIGO',
  ORANGE: 'ORANGE',
  DPO: 'DPO',
  SELCOM: 'SELCOM'
};

exports.PaymentStatus = exports.$Enums.PaymentStatus = {
  PENDING: 'PENDING',
  PROCESSING: 'PROCESSING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED',
  REFUNDED: 'REFUNDED'
};

exports.Prisma.ModelName = {
  Project: 'Project',
  ProjectUsers: 'ProjectUsers',
  ProjectInvite: 'ProjectInvite',
  SentEmail: 'SentEmail',
  User: 'User',
  Account: 'Account',
  Session: 'Session',
  VerificationToken: 'VerificationToken',
  Products: 'Products',
  Api_keys: 'Api_keys',
  Prices: 'Prices',
  Discounts: 'Discounts',
  Discount_Prices: 'Discount_Prices',
  Customers: 'Customers',
  Addresses: 'Addresses',
  SubscriptionItems: 'SubscriptionItems',
  Subscription_Scheduled_Changes: 'Subscription_Scheduled_Changes',
  BillingDetails: 'BillingDetails',
  Subscriptions: 'Subscriptions',
  TransactionItems: 'TransactionItems',
  TransactionPayment: 'TransactionPayment',
  Transactions: 'Transactions'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/Users/tony/web/jani-payments/packages/db/src/client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "binary"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "darwin-arm64",
        "native": true
      },
      {
        "fromEnvVar": null,
        "value": "linux-arm64-openssl-3.0.x"
      }
    ],
    "previewFeatures": [
      "driverAdapters",
      "omitApi"
    ],
    "sourceFilePath": "/Users/tony/web/jani-payments/packages/db/schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "../..",
  "clientVersion": "6.2.1",
  "engineVersion": "605197351a3c8bdd595af2d2a9bc3025bca48ea2",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\ngenerator client {\n  provider        = \"prisma-client-js\"\n  engineType      = \"binary\"\n  // binaryTargets   = [\"native\", \"rhel-openssl-3.0.x\"]\n  binaryTargets   = [\"native\", \"linux-arm64-openssl-3.0.x\"]\n  output          = \"src/client\"\n  previewFeatures = [\"driverAdapters\", \"omitApi\"]\n}\n\ndatasource db {\n  provider  = \"postgresql\"\n  url       = env(\"DATABASE_URL\")\n  directUrl = env(\"DIRECT_URL\")\n}\n\ngenerator zod {\n  provider = \"zod-prisma\"\n  output   = \"src/zod\" // (default) the directory where generated zod schemas will be saved\n\n  relationModel = true // (default) Create and export both plain and related models.\n  // relationModel         = \"default\" // Do not export model without relations.\n  // relationModel         = false // Do not generate related model\n\n  modelCase = \"PascalCase\" // (default) Output models using pascal case (ex. UserModel, PostModel)\n  // modelCase             = \"camelCase\" // Output models using camel case (ex. userModel, postModel)\n\n  modelSuffix = \"Model\" // (default) Suffix to apply to your prisma models when naming Zod schemas\n\n  // useDecimalJs          = false // (default) represent the prisma Decimal type using as a JS number\n  useDecimalJs = false // represent the prisma Decimal type using Decimal.js (as Prisma does)\n\n  // https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values\n  prismaJsonNullability = true // (default) uses prisma's scheme for JSON field nullability\n  // prismaJsonNullability = false // allows null assignment to optional JSON fields\n}\n\n// thimk of this as workspaces under organization\nmodel Project {\n  id                String          @id @default(cuid())\n  name              String\n  slug              String          @unique\n  logo              String?\n  plan              String          @default(\"free\")\n  billingCycleStart Int // day of the month when the billing cycle starts\n  inviteCode        String?         @unique\n  createdAt         DateTime        @default(now())\n  updatedAt         DateTime        @updatedAt\n  usageLastChecked  DateTime        @default(now())\n  users             ProjectUsers[]\n  invites           ProjectInvite[]\n  sentEmails        SentEmail[]\n  products          Products[]\n  prices            Prices[]\n  discounts         Discounts[]\n  customers         Customers[]\n  Subscriptions     Subscriptions[]\n  Transactions      Transactions[]\n\n  @@index(usageLastChecked(sort: Asc))\n}\n\n// this table is for members of org working on a certain project\nmodel ProjectUsers {\n  id        String   @id @default(cuid())\n  role      Role     @default(member)\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)\n  userId    String\n  project   Project  @relation(fields: [projectId], references: [id], onDelete: Cascade)\n  projectId String\n\n  @@unique([userId, projectId])\n  @@index([projectId])\n}\n\nenum Role {\n  owner\n  member\n}\n\nmodel ProjectInvite {\n  email     String\n  expires   DateTime\n  project   Project  @relation(fields: [projectId], references: [id], onDelete: Cascade)\n  projectId String\n  createdAt DateTime @default(now())\n\n  @@unique([email, projectId])\n  @@index([projectId])\n}\n\nmodel SentEmail {\n  id        String   @id @default(cuid())\n  type      String\n  createdAt DateTime @default(now())\n  project   Project? @relation(fields: [projectId], references: [id], onDelete: Cascade)\n  projectId String?\n\n  @@index([projectId])\n}\n\nmodel User {\n  id               String         @id @default(cuid())\n  name             String?\n  email            String?        @unique\n  emailVerified    DateTime?\n  image            String?\n  accounts         Account[]\n  source           String?\n  defaultWorkspace String?\n  createdAt        DateTime       @default(now())\n  updatedAt        DateTime       @updatedAt\n  ProjectUsers     ProjectUsers[]\n  sessions         Session[]\n  api_keys         Api_keys[]\n\n  @@index(source)\n  @@index(defaultWorkspace)\n}\n\nmodel Account {\n  userId            String\n  type              String\n  provider          String\n  providerAccountId String\n  refresh_token     String?\n  access_token      String?\n  expires_at        Int?\n  token_type        String?\n  scope             String?\n  id_token          String?\n  session_state     String?\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  user User @relation(fields: [userId], references: [id], onDelete: Cascade)\n\n  @@id([provider, providerAccountId])\n}\n\nmodel Session {\n  sessionToken String   @unique\n  userId       String\n  expires      DateTime\n  user         User     @relation(fields: [userId], references: [id], onDelete: Cascade)\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n}\n\nmodel VerificationToken {\n  identifier String\n  token      String\n  expires    DateTime\n\n  @@id([identifier, token])\n}\n\nmodel Products {\n  id           String         @unique @default(uuid())\n  name         String\n  description  String\n  status       product_status @default(active)\n  createdAt    DateTime       @default(now())\n  updatedAt    DateTime\n  custom_data  Json?\n  Project      Project        @relation(fields: [project_id], references: [id])\n  project_id   String\n  prices       Prices[]\n  Transactions Transactions[]\n}\n\nenum product_status {\n  active\n  archived\n}\n\nmodel Api_keys {\n  id          String   @unique @default(uuid())\n  prefix      String?\n  description String?\n  createdAt   DateTime @default(now())\n  key         String   @unique\n  User        User     @relation(fields: [userId], references: [id])\n  userId      String\n\n  @@index([key, userId])\n}\n\nenum Entity_Status {\n  active\n  archived\n}\n\nenum PriceType {\n  standard //considered part of the catalog and can be reused across transaction\n  custom // just a one time price, ideally created for a specific transaction\n}\n\nenum BillingInterval {\n  day\n  week\n  month\n  year\n}\n\n// model QuantityConstraints {\n//   id      String  @id @default(cuid())\n//   minimum Int\n//   maximum Int\n//   Price   Prices? @relation(fields: [priceId], references: [id])\n//   priceId String? @unique\n// }\n\n// Main Price model\nmodel Prices {\n  id                      String              @id\n  type                    PriceType           @default(standard)\n  description             String?\n  name                    String\n  billing_cycle_frequency Int\n  billing_cycle_interval  BillingInterval\n  trial_period_frequency  Int\n  trial_period_interval   BillingInterval\n  // tax_mode            TaxMode\n  amount                  Decimal\n  currency_code           String\n  custom_data             Json? // Flexible custom data storage\n  status                  Entity_Status\n  // quantity                QuantityConstraints?\n  created_at              DateTime\n  updated_at              DateTime            @updatedAt\n  Products                Products?           @relation(fields: [product_id], references: [id])\n  product_id              String\n  Project                 Project             @relation(fields: [projectId], references: [id])\n  projectId               String\n  Discount_Prices         Discount_Prices[]\n  Subscription_Items      SubscriptionItems[]\n  TransactionItems        TransactionItems[]\n\n  @@index([product_id, projectId])\n}\n\nenum Discount_type {\n  flat\n  percentage\n  flat_per_seat\n}\n\nmodel Discounts {\n  id                      String            @id\n  status                  Entity_Status?    @default(active)\n  description             String?\n  enabled_for_checkout    Boolean?\n  amount                  Decimal\n  currency_code           String\n  type                    Discount_type\n  recur                   Boolean?\n  max_recurring_intervals Decimal?\n  usage_limit             Int?\n  expires_at              DateTime?\n  custom_data             Json?\n  discount_prices         Discount_Prices[]\n  times_used              Int?              @default(0)\n  created_at              DateTime\n  updated_at              DateTime\n  Project                 Project?          @relation(fields: [projectId], references: [id])\n  projectId               String?\n  Subscriptions           Subscriptions[]\n  Transactions            Transactions[]\n}\n\nmodel Discount_Prices {\n  discount    Discounts? @relation(fields: [discount_Id], references: [id])\n  discount_Id String\n  price_id    String\n  price       Prices     @relation(fields: [price_id], references: [id])\n\n  @@id([discount_Id, price_id])\n}\n\nmodel Customers {\n  id            String          @id\n  email         String          @unique\n  name          String\n  status        Entity_Status?  @default(active)\n  description   String?\n  custom_data   Json?\n  created_at    DateTime\n  updated_at    DateTime        @updatedAt\n  Project       Project?        @relation(fields: [projectId], references: [id])\n  projectId     String?\n  Addresses     Addresses[]\n  Subscriptions Subscriptions[]\n  Transactions  Transactions[]\n}\n\nmodel Addresses {\n  id            String          @id\n  description   String?\n  first_line    String?\n  custom_data   Json?\n  city          String?\n  status        Entity_Status?  @default(active)\n  created_at    DateTime        @default(now())\n  updated_at    DateTime\n  Customers     Customers?      @relation(fields: [customer_id], references: [id])\n  customer_id   String?\n  Subscriptions Subscriptions[]\n  Transactions  Transactions[]\n}\n\nenum SubscriptionsStatus {\n  active\n  cancelled\n  past_due\n  paused\n  trial\n}\n\nenum CollectionMode {\n  automatic\n  manual\n}\n\nenum SubscriptionItemsStatus {\n  active\n  inactive\n  trialing\n}\n\nmodel SubscriptionItems {\n  id              String        @id\n  subscription    Subscriptions @relation(fields: [subscription_id], references: [id])\n  subscription_id String\n  price           Prices        @relation(fields: [price_id], references: [id])\n  price_id        String\n\n  quantity             Int\n  status               SubscriptionItemsStatus\n  recurring            Boolean\n  created_at           DateTime                @default(now())\n  updated_at           DateTime                @updatedAt\n  // billing dates\n  previously_billed_at DateTime?\n  next_billed_at       DateTime?\n  // trial dates\n  trial_started_at     DateTime?\n  trial_ended_at       DateTime?\n  custom_data          Json?\n}\n\nenum ScheduledChangeAction {\n  pause\n  resume\n  cancel\n}\n\nenum ScheduledChangesStatus {\n  completed\n  scheduled\n}\n\nmodel Subscription_Scheduled_Changes {\n  id              String                 @id @default(cuid())\n  subscription    Subscriptions          @relation(fields: [subscription_id], references: [id])\n  subscription_id String\n  action          ScheduledChangeAction\n  effective_at    DateTime\n  resumes_at      DateTime?\n  status          ScheduledChangesStatus @default(scheduled)\n\n  @@index([subscription_id])\n  @@index([effective_at])\n}\n\nmodel BillingDetails {\n  id                     String          @id @default(cuid())\n  subscription           Subscriptions   @relation(fields: [subscription_id], references: [id])\n  subscription_id        String          @unique // one billing detail per subscription\n  // the 2 below means how long has the customer have to pay for this invoice\n  payment_interval       BillingInterval\n  payment_frequency      Int\n  enable_checkout        Boolean         @default(false)\n  purchase_order_number  String?\n  additional_information String?\n  created_at             DateTime        @default(now())\n  updated_at             DateTime        @updatedAt\n}\n\nmodel Subscriptions {\n  id            String              @id\n  status        SubscriptionsStatus\n  currency_code String\n\n  // Temporal Data\n  created_at      DateTime  @default(now())\n  updated_at      DateTime  @updatedAt\n  started_at      DateTime?\n  first_billed_at DateTime?\n  next_billed_at  DateTime? // when should you attempt to charge\n  paused_at       DateTime?\n  canceled_at     DateTime?\n\n  // current_billing_period\n  current_period_starts DateTime?\n  current_period_ends   DateTime? // the customer has currently paid until this date\n\n  // billing_cycle info\n  billing_cycle_interval  BillingInterval\n  billing_cycle_frequency Int\n\n  // management_urls\n  update_payment_method_url String?\n  cancel_url                String?\n\n  // relations\n  customer    Customers @relation(fields: [customer_id], references: [id])\n  customer_id String\n  address     Addresses @relation(fields: [address_id], references: [id])\n  address_id  String\n  project     Project   @relation(fields: [project_id], references: [id])\n  project_id  String\n\n  // Active Discount\n  discount    Discounts? @relation(fields: [discount_id], references: [id])\n  discount_id String?\n\n  collection_mode CollectionMode\n\n  Subscription_Items             SubscriptionItems[]\n  Subscription_Scheduled_Changes Subscription_Scheduled_Changes[]\n  BillingDetails                 BillingDetails?\n  transaction                    Transactions[]\n\n  @@index([customer_id])\n  @@index([project_id])\n  @@index([next_billed_at])\n}\n\nenum TransactionStatus {\n  billed\n  cancelled\n}\n\nmodel TransactionItems {\n  id             String        @id @default(cuid())\n  price          Prices        @relation(fields: [price_id], references: [id])\n  price_id       String\n  quantity       Int\n  Transactions   Transactions? @relation(fields: [transactionsId], references: [id])\n  transactionsId String?\n}\n\n// how did you accept this payment\nenum PaymentMethod {\n  MOBILE_MONEY\n  CARD\n  BANK_TRANSFER\n  // OFFLINE  // is accepting payments offline legal?\n}\n\n// who helped u to process this payment\nenum PaymentProvider {\n  MPESA\n  AIRTEL\n  MTN\n  STRIPE\n  PAYSTACK\n  FLUTTERWAVE\n  TIGO\n  ORANGE\n  DPO\n  SELCOM\n}\n\n// and what is the status of that payment\nenum PaymentStatus {\n  PENDING\n  PROCESSING\n  COMPLETED\n  FAILED\n  REFUNDED\n}\n\nmodel TransactionPayment {\n  id               String          @id @default(cuid())\n  transaction      Transactions    @relation(fields: [transaction_id], references: [id], onDelete: Cascade)\n  transaction_id   String          @unique\n  payment_method   PaymentMethod\n  payment_provider PaymentProvider\n  status           PaymentStatus   @default(PENDING)\n  amount           Decimal\n  currency_code    String\n\n  // Mobile Money specific\n  mobile_network String? // e.g., \"Safaricom\", \"MTN\"\n  phone_suffix   String? // Last 4 digits only\n\n  // Card specific (PCI compliant)\n  card_last4       String?\n  card_brand       String? // e.g., \"Visa\", \"Mastercard\"\n  card_exp_month   Int?\n  card_exp_year    Int?\n  card_holder_name String?\n\n  // Bank Transfer specific\n  bank_reference String?\n  bank_name      String?\n\n  // Common fields\n  provider_reference String? // Reference from payment provider\n  provider_metadata  Json? // Any additional provider-specific data\n  error_message      String?\n\n  created_at DateTime  @default(now())\n  updated_at DateTime? @updatedAt\n\n  @@index([status])\n  @@index([payment_method])\n  @@index([created_at])\n}\n\nmodel Transactions {\n  id              String            @id\n  status          TransactionStatus\n  // relationships\n  customer_id     String\n  address_id      String\n  project_id      String\n  product_id      String\n  subscription_id String? // one transaction belongs to one subscription\n\n  customer Customers @relation(fields: [customer_id], references: [id])\n\n  address Addresses @relation(fields: [address_id], references: [id])\n\n  project Project @relation(fields: [project_id], references: [id])\n\n  product Products @relation(fields: [product_id], references: [id])\n\n  subscription       Subscriptions?      @relation(fields: [subscription_id], references: [id])\n  TransactionPayment TransactionPayment?\n\n  // transaction items\n  transactionItems TransactionItems[]\n  // Basic totals\n  subtotal         Decimal\n  // tax           Decimal  will handle the tax logic later in time\n  discount_ammount Decimal\n  total            Decimal\n  grand_total      Decimal\n\n  // Active Discount\n  discount    Discounts? @relation(fields: [discount_id], references: [id])\n  discount_id String?\n\n  // invoice details\n  invoice_id String\n  // invoice_number String   // should maybe add this ??\n\n  // current_billing_period\n  current_period_starts DateTime?\n  current_period_ends   DateTime?\n\n  custom_data     Json?\n  currency_code   String\n  collection_mode CollectionMode\n\n  // Temporal Data\n  created_at DateTime  @default(now())\n  updated_at DateTime? @updatedAt\n\n  @@index([created_at])\n  @@index([customer_id, created_at])\n}\n",
  "inlineSchemaHash": "bfc9b18e9e58d082f5bd5a45cd86148d12171a5015520afa30c28b8eb4325826",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"Project\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"slug\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"logo\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"plan\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"billingCycleStart\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"inviteCode\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"usageLastChecked\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"users\",\"kind\":\"object\",\"type\":\"ProjectUsers\",\"relationName\":\"ProjectToProjectUsers\"},{\"name\":\"invites\",\"kind\":\"object\",\"type\":\"ProjectInvite\",\"relationName\":\"ProjectToProjectInvite\"},{\"name\":\"sentEmails\",\"kind\":\"object\",\"type\":\"SentEmail\",\"relationName\":\"ProjectToSentEmail\"},{\"name\":\"products\",\"kind\":\"object\",\"type\":\"Products\",\"relationName\":\"ProductsToProject\"},{\"name\":\"prices\",\"kind\":\"object\",\"type\":\"Prices\",\"relationName\":\"PricesToProject\"},{\"name\":\"discounts\",\"kind\":\"object\",\"type\":\"Discounts\",\"relationName\":\"DiscountsToProject\"},{\"name\":\"customers\",\"kind\":\"object\",\"type\":\"Customers\",\"relationName\":\"CustomersToProject\"},{\"name\":\"Subscriptions\",\"kind\":\"object\",\"type\":\"Subscriptions\",\"relationName\":\"ProjectToSubscriptions\"},{\"name\":\"Transactions\",\"kind\":\"object\",\"type\":\"Transactions\",\"relationName\":\"ProjectToTransactions\"}],\"dbName\":null},\"ProjectUsers\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"role\",\"kind\":\"enum\",\"type\":\"Role\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"user\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"ProjectUsersToUser\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"project\",\"kind\":\"object\",\"type\":\"Project\",\"relationName\":\"ProjectToProjectUsers\"},{\"name\":\"projectId\",\"kind\":\"scalar\",\"type\":\"String\"}],\"dbName\":null},\"ProjectInvite\":{\"fields\":[{\"name\":\"email\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"expires\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"project\",\"kind\":\"object\",\"type\":\"Project\",\"relationName\":\"ProjectToProjectInvite\"},{\"name\":\"projectId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null},\"SentEmail\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"type\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"project\",\"kind\":\"object\",\"type\":\"Project\",\"relationName\":\"ProjectToSentEmail\"},{\"name\":\"projectId\",\"kind\":\"scalar\",\"type\":\"String\"}],\"dbName\":null},\"User\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"email\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"emailVerified\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"image\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"accounts\",\"kind\":\"object\",\"type\":\"Account\",\"relationName\":\"AccountToUser\"},{\"name\":\"source\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"defaultWorkspace\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"ProjectUsers\",\"kind\":\"object\",\"type\":\"ProjectUsers\",\"relationName\":\"ProjectUsersToUser\"},{\"name\":\"sessions\",\"kind\":\"object\",\"type\":\"Session\",\"relationName\":\"SessionToUser\"},{\"name\":\"api_keys\",\"kind\":\"object\",\"type\":\"Api_keys\",\"relationName\":\"Api_keysToUser\"}],\"dbName\":null},\"Account\":{\"fields\":[{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"type\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"provider\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"providerAccountId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"refresh_token\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"access_token\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"expires_at\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"token_type\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"scope\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"id_token\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"session_state\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"user\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"AccountToUser\"}],\"dbName\":null},\"Session\":{\"fields\":[{\"name\":\"sessionToken\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"expires\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"user\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"SessionToUser\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null},\"VerificationToken\":{\"fields\":[{\"name\":\"identifier\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"token\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"expires\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null},\"Products\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"description\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"status\",\"kind\":\"enum\",\"type\":\"product_status\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"custom_data\",\"kind\":\"scalar\",\"type\":\"Json\"},{\"name\":\"Project\",\"kind\":\"object\",\"type\":\"Project\",\"relationName\":\"ProductsToProject\"},{\"name\":\"project_id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"prices\",\"kind\":\"object\",\"type\":\"Prices\",\"relationName\":\"PricesToProducts\"},{\"name\":\"Transactions\",\"kind\":\"object\",\"type\":\"Transactions\",\"relationName\":\"ProductsToTransactions\"}],\"dbName\":null},\"Api_keys\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"prefix\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"description\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"key\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"User\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"Api_keysToUser\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"String\"}],\"dbName\":null},\"Prices\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"type\",\"kind\":\"enum\",\"type\":\"PriceType\"},{\"name\":\"description\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"billing_cycle_frequency\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"billing_cycle_interval\",\"kind\":\"enum\",\"type\":\"BillingInterval\"},{\"name\":\"trial_period_frequency\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"trial_period_interval\",\"kind\":\"enum\",\"type\":\"BillingInterval\"},{\"name\":\"amount\",\"kind\":\"scalar\",\"type\":\"Decimal\"},{\"name\":\"currency_code\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"custom_data\",\"kind\":\"scalar\",\"type\":\"Json\"},{\"name\":\"status\",\"kind\":\"enum\",\"type\":\"Entity_Status\"},{\"name\":\"created_at\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"Products\",\"kind\":\"object\",\"type\":\"Products\",\"relationName\":\"PricesToProducts\"},{\"name\":\"product_id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"Project\",\"kind\":\"object\",\"type\":\"Project\",\"relationName\":\"PricesToProject\"},{\"name\":\"projectId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"Discount_Prices\",\"kind\":\"object\",\"type\":\"Discount_Prices\",\"relationName\":\"Discount_PricesToPrices\"},{\"name\":\"Subscription_Items\",\"kind\":\"object\",\"type\":\"SubscriptionItems\",\"relationName\":\"PricesToSubscriptionItems\"},{\"name\":\"TransactionItems\",\"kind\":\"object\",\"type\":\"TransactionItems\",\"relationName\":\"PricesToTransactionItems\"}],\"dbName\":null},\"Discounts\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"status\",\"kind\":\"enum\",\"type\":\"Entity_Status\"},{\"name\":\"description\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"enabled_for_checkout\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"amount\",\"kind\":\"scalar\",\"type\":\"Decimal\"},{\"name\":\"currency_code\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"type\",\"kind\":\"enum\",\"type\":\"Discount_type\"},{\"name\":\"recur\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"max_recurring_intervals\",\"kind\":\"scalar\",\"type\":\"Decimal\"},{\"name\":\"usage_limit\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"expires_at\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"custom_data\",\"kind\":\"scalar\",\"type\":\"Json\"},{\"name\":\"discount_prices\",\"kind\":\"object\",\"type\":\"Discount_Prices\",\"relationName\":\"Discount_PricesToDiscounts\"},{\"name\":\"times_used\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"created_at\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"Project\",\"kind\":\"object\",\"type\":\"Project\",\"relationName\":\"DiscountsToProject\"},{\"name\":\"projectId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"Subscriptions\",\"kind\":\"object\",\"type\":\"Subscriptions\",\"relationName\":\"DiscountsToSubscriptions\"},{\"name\":\"Transactions\",\"kind\":\"object\",\"type\":\"Transactions\",\"relationName\":\"DiscountsToTransactions\"}],\"dbName\":null},\"Discount_Prices\":{\"fields\":[{\"name\":\"discount\",\"kind\":\"object\",\"type\":\"Discounts\",\"relationName\":\"Discount_PricesToDiscounts\"},{\"name\":\"discount_Id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"price_id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"price\",\"kind\":\"object\",\"type\":\"Prices\",\"relationName\":\"Discount_PricesToPrices\"}],\"dbName\":null},\"Customers\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"email\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"status\",\"kind\":\"enum\",\"type\":\"Entity_Status\"},{\"name\":\"description\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"custom_data\",\"kind\":\"scalar\",\"type\":\"Json\"},{\"name\":\"created_at\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"Project\",\"kind\":\"object\",\"type\":\"Project\",\"relationName\":\"CustomersToProject\"},{\"name\":\"projectId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"Addresses\",\"kind\":\"object\",\"type\":\"Addresses\",\"relationName\":\"AddressesToCustomers\"},{\"name\":\"Subscriptions\",\"kind\":\"object\",\"type\":\"Subscriptions\",\"relationName\":\"CustomersToSubscriptions\"},{\"name\":\"Transactions\",\"kind\":\"object\",\"type\":\"Transactions\",\"relationName\":\"CustomersToTransactions\"}],\"dbName\":null},\"Addresses\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"description\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"first_line\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"custom_data\",\"kind\":\"scalar\",\"type\":\"Json\"},{\"name\":\"city\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"status\",\"kind\":\"enum\",\"type\":\"Entity_Status\"},{\"name\":\"created_at\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"Customers\",\"kind\":\"object\",\"type\":\"Customers\",\"relationName\":\"AddressesToCustomers\"},{\"name\":\"customer_id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"Subscriptions\",\"kind\":\"object\",\"type\":\"Subscriptions\",\"relationName\":\"AddressesToSubscriptions\"},{\"name\":\"Transactions\",\"kind\":\"object\",\"type\":\"Transactions\",\"relationName\":\"AddressesToTransactions\"}],\"dbName\":null},\"SubscriptionItems\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"subscription\",\"kind\":\"object\",\"type\":\"Subscriptions\",\"relationName\":\"SubscriptionItemsToSubscriptions\"},{\"name\":\"subscription_id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"price\",\"kind\":\"object\",\"type\":\"Prices\",\"relationName\":\"PricesToSubscriptionItems\"},{\"name\":\"price_id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"quantity\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"status\",\"kind\":\"enum\",\"type\":\"SubscriptionItemsStatus\"},{\"name\":\"recurring\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"created_at\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"previously_billed_at\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"next_billed_at\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"trial_started_at\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"trial_ended_at\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"custom_data\",\"kind\":\"scalar\",\"type\":\"Json\"}],\"dbName\":null},\"Subscription_Scheduled_Changes\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"subscription\",\"kind\":\"object\",\"type\":\"Subscriptions\",\"relationName\":\"Subscription_Scheduled_ChangesToSubscriptions\"},{\"name\":\"subscription_id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"action\",\"kind\":\"enum\",\"type\":\"ScheduledChangeAction\"},{\"name\":\"effective_at\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"resumes_at\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"status\",\"kind\":\"enum\",\"type\":\"ScheduledChangesStatus\"}],\"dbName\":null},\"BillingDetails\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"subscription\",\"kind\":\"object\",\"type\":\"Subscriptions\",\"relationName\":\"BillingDetailsToSubscriptions\"},{\"name\":\"subscription_id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"payment_interval\",\"kind\":\"enum\",\"type\":\"BillingInterval\"},{\"name\":\"payment_frequency\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"enable_checkout\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"purchase_order_number\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"additional_information\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"created_at\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null},\"Subscriptions\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"status\",\"kind\":\"enum\",\"type\":\"SubscriptionsStatus\"},{\"name\":\"currency_code\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"created_at\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"started_at\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"first_billed_at\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"next_billed_at\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"paused_at\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"canceled_at\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"current_period_starts\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"current_period_ends\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"billing_cycle_interval\",\"kind\":\"enum\",\"type\":\"BillingInterval\"},{\"name\":\"billing_cycle_frequency\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"update_payment_method_url\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"cancel_url\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"customer\",\"kind\":\"object\",\"type\":\"Customers\",\"relationName\":\"CustomersToSubscriptions\"},{\"name\":\"customer_id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"address\",\"kind\":\"object\",\"type\":\"Addresses\",\"relationName\":\"AddressesToSubscriptions\"},{\"name\":\"address_id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"project\",\"kind\":\"object\",\"type\":\"Project\",\"relationName\":\"ProjectToSubscriptions\"},{\"name\":\"project_id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"discount\",\"kind\":\"object\",\"type\":\"Discounts\",\"relationName\":\"DiscountsToSubscriptions\"},{\"name\":\"discount_id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"collection_mode\",\"kind\":\"enum\",\"type\":\"CollectionMode\"},{\"name\":\"Subscription_Items\",\"kind\":\"object\",\"type\":\"SubscriptionItems\",\"relationName\":\"SubscriptionItemsToSubscriptions\"},{\"name\":\"Subscription_Scheduled_Changes\",\"kind\":\"object\",\"type\":\"Subscription_Scheduled_Changes\",\"relationName\":\"Subscription_Scheduled_ChangesToSubscriptions\"},{\"name\":\"BillingDetails\",\"kind\":\"object\",\"type\":\"BillingDetails\",\"relationName\":\"BillingDetailsToSubscriptions\"},{\"name\":\"transaction\",\"kind\":\"object\",\"type\":\"Transactions\",\"relationName\":\"SubscriptionsToTransactions\"}],\"dbName\":null},\"TransactionItems\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"price\",\"kind\":\"object\",\"type\":\"Prices\",\"relationName\":\"PricesToTransactionItems\"},{\"name\":\"price_id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"quantity\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"Transactions\",\"kind\":\"object\",\"type\":\"Transactions\",\"relationName\":\"TransactionItemsToTransactions\"},{\"name\":\"transactionsId\",\"kind\":\"scalar\",\"type\":\"String\"}],\"dbName\":null},\"TransactionPayment\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"transaction\",\"kind\":\"object\",\"type\":\"Transactions\",\"relationName\":\"TransactionPaymentToTransactions\"},{\"name\":\"transaction_id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"payment_method\",\"kind\":\"enum\",\"type\":\"PaymentMethod\"},{\"name\":\"payment_provider\",\"kind\":\"enum\",\"type\":\"PaymentProvider\"},{\"name\":\"status\",\"kind\":\"enum\",\"type\":\"PaymentStatus\"},{\"name\":\"amount\",\"kind\":\"scalar\",\"type\":\"Decimal\"},{\"name\":\"currency_code\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"mobile_network\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"phone_suffix\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"card_last4\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"card_brand\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"card_exp_month\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"card_exp_year\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"card_holder_name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"bank_reference\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"bank_name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"provider_reference\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"provider_metadata\",\"kind\":\"scalar\",\"type\":\"Json\"},{\"name\":\"error_message\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"created_at\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null},\"Transactions\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"status\",\"kind\":\"enum\",\"type\":\"TransactionStatus\"},{\"name\":\"customer_id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"address_id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"project_id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"product_id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"subscription_id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"customer\",\"kind\":\"object\",\"type\":\"Customers\",\"relationName\":\"CustomersToTransactions\"},{\"name\":\"address\",\"kind\":\"object\",\"type\":\"Addresses\",\"relationName\":\"AddressesToTransactions\"},{\"name\":\"project\",\"kind\":\"object\",\"type\":\"Project\",\"relationName\":\"ProjectToTransactions\"},{\"name\":\"product\",\"kind\":\"object\",\"type\":\"Products\",\"relationName\":\"ProductsToTransactions\"},{\"name\":\"subscription\",\"kind\":\"object\",\"type\":\"Subscriptions\",\"relationName\":\"SubscriptionsToTransactions\"},{\"name\":\"TransactionPayment\",\"kind\":\"object\",\"type\":\"TransactionPayment\",\"relationName\":\"TransactionPaymentToTransactions\"},{\"name\":\"transactionItems\",\"kind\":\"object\",\"type\":\"TransactionItems\",\"relationName\":\"TransactionItemsToTransactions\"},{\"name\":\"subtotal\",\"kind\":\"scalar\",\"type\":\"Decimal\"},{\"name\":\"discount_ammount\",\"kind\":\"scalar\",\"type\":\"Decimal\"},{\"name\":\"total\",\"kind\":\"scalar\",\"type\":\"Decimal\"},{\"name\":\"grand_total\",\"kind\":\"scalar\",\"type\":\"Decimal\"},{\"name\":\"discount\",\"kind\":\"object\",\"type\":\"Discounts\",\"relationName\":\"DiscountsToTransactions\"},{\"name\":\"discount_id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"invoice_id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"current_period_starts\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"current_period_ends\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"custom_data\",\"kind\":\"scalar\",\"type\":\"Json\"},{\"name\":\"currency_code\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"collection_mode\",\"kind\":\"enum\",\"type\":\"CollectionMode\"},{\"name\":\"created_at\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = {
  getRuntime: () => require('./query_engine_bg.js'),
  getQueryEngineWasmModule: async () => {
    const loader = (await import('#wasm-engine-loader')).default
    const engine = (await loader).default
    return engine 
  }
}

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

