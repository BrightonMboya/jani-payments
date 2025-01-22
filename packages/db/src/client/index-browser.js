
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


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

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

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

exports.Entity_Status = exports.$Enums.Entity_Status = {
  active: 'active',
  archived: 'archived'
};

exports.Discount_type = exports.$Enums.Discount_type = {
  flat: 'flat',
  percentage: 'percentage',
  flat_per_seat: 'flat_per_seat'
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

exports.TransactionStatus = exports.$Enums.TransactionStatus = {
  billed: 'billed',
  cancelled: 'cancelled'
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
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
