import { pgTable, uniqueIndex, text, timestamp, numeric, jsonb, integer, boolean, pgEnum } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"

export const billingInterval = pgEnum("BillingInterval", ['day', 'week', 'month', 'year'])
export const collectionMode = pgEnum("CollectionMode", ['automatic', 'manual'])
export const discountType = pgEnum("Discount_type", ['flat', 'percentage', 'flat_per_seat'])
export const entityStatus = pgEnum("Entity_Status", ['active', 'archived'])
export const paymentMethod = pgEnum("PaymentMethod", ['MOBILE_MONEY', 'CARD', 'BANK_TRANSFER'])
export const paymentProvider = pgEnum("PaymentProvider", ['MPESA', 'AIRTEL', 'MTN', 'STRIPE', 'PAYSTACK', 'FLUTTERWAVE', 'TIGO', 'ORANGE', 'DPO', 'SELCOM'])
export const paymentStatus = pgEnum("PaymentStatus", ['PENDING', 'PROCESSING', 'COMPLETED', 'FAILED', 'REFUNDED'])
export const priceType = pgEnum("PriceType", ['standard', 'custom'])
export const role = pgEnum("Role", ['owner', 'member'])
export const scheduledChangeAction = pgEnum("ScheduledChangeAction", ['pause', 'resume', 'cancel'])
export const scheduledChangesStatus = pgEnum("ScheduledChangesStatus", ['completed', 'scheduled'])
export const subscriptionItemsStatus = pgEnum("SubscriptionItemsStatus", ['active', 'inactive', 'trialing'])
export const subscriptionsStatus = pgEnum("SubscriptionsStatus", ['active', 'cancelled', 'past_due', 'paused', 'trial'])
export const transactionStatus = pgEnum("TransactionStatus", ['billed', 'cancelled'])
export const productStatus = pgEnum("product_status", ['active', 'archived'])


export const projectUsers = pgTable("ProjectUsers", {
	id: text().primaryKey().notNull(),
	role: role().default('member').notNull(),
	createdAt: timestamp({ precision: 3, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	updatedAt: timestamp({ precision: 3, mode: 'string' }).notNull(),
	userId: text().notNull(),
	projectId: text().notNull(),
}, (table) => [
	uniqueIndex("ProjectUsers_userId_projectId_key").using("btree", table.userId.asc().nullsLast().op("text_ops"), table.projectId.asc().nullsLast().op("text_ops")),
]);

export const transactions = pgTable("Transactions", {
	id: text().primaryKey().notNull(),
	status: transactionStatus().notNull(),
	customerId: text("customer_id").notNull(),
	addressId: text("address_id").notNull(),
	projectId: text("project_id").notNull(),
	productId: text("product_id").notNull(),
	subscriptionId: text("subscription_id"),
	subtotal: numeric({ precision: 65, scale:  30 }).notNull(),
	discountAmmount: numeric("discount_ammount", { precision: 65, scale:  30 }).notNull(),
	total: numeric({ precision: 65, scale:  30 }).notNull(),
	grandTotal: numeric("grand_total", { precision: 65, scale:  30 }).notNull(),
	discountId: text("discount_id"),
	invoiceId: text("invoice_id").notNull(),
	currentPeriodStarts: timestamp("current_period_starts", { precision: 3, mode: 'string' }),
	currentPeriodEnds: timestamp("current_period_ends", { precision: 3, mode: 'string' }),
	customData: jsonb("custom_data"),
	currencyCode: text("currency_code").notNull(),
	collectionMode: collectionMode("collection_mode").notNull(),
	createdAt: timestamp("created_at", { precision: 3, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	updatedAt: timestamp("updated_at", { precision: 3, mode: 'string' }),
});

export const transactionPayment = pgTable("TransactionPayment", {
	id: text().primaryKey().notNull(),
	transactionId: text("transaction_id").notNull(),
	paymentMethod: paymentMethod("payment_method").notNull(),
	paymentProvider: paymentProvider("payment_provider").notNull(),
	status: paymentStatus().default('PENDING').notNull(),
	amount: numeric({ precision: 65, scale:  30 }).notNull(),
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
	createdAt: timestamp("created_at", { precision: 3, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	updatedAt: timestamp("updated_at", { precision: 3, mode: 'string' }),
});

export const transactionItems = pgTable("TransactionItems", {
	id: text().primaryKey().notNull(),
	priceId: text("price_id").notNull(),
	quantity: integer().notNull(),
	transactionsId: text(),
});

export const checkoutItems = pgTable("CheckoutItems", {
	id: text().primaryKey().notNull(),
	priceId: text("price_id").notNull(),
	quantity: integer().notNull(),
	checkoutId: text().notNull(),
});

export const checkouts = pgTable("Checkouts", {
	id: text().primaryKey().notNull(),
	customerId: text("customer_id").notNull(),
	projectId: text("project_id").notNull(),
	createdAt: timestamp("created_at", { precision: 3, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	discountId: text("discount_id"),
	discountAmmount: numeric("discount_ammount", { precision: 65, scale:  30 }).notNull(),
	grandTotal: numeric("grand_total", { precision: 65, scale:  30 }).notNull(),
	total: numeric({ precision: 65, scale:  30 }).notNull(),
});

export const user = pgTable("User", {
	id: text().primaryKey().notNull(),
	name: text(),
	email: text(),
	emailVerified: timestamp({ precision: 3, mode: 'string' }),
	image: text(),
	source: text(),
	defaultWorkspace: text(),
	createdAt: timestamp({ precision: 3, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	updatedAt: timestamp({ precision: 3, mode: 'string' }).notNull(),
});

export const projectInvite = pgTable("ProjectInvite", {
	email: text().notNull(),
	expires: timestamp({ precision: 3, mode: 'string' }).notNull(),
	projectId: text().notNull(),
	createdAt: timestamp({ precision: 3, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
}, (table) => [
	uniqueIndex("ProjectInvite_email_projectId_key").using("btree", table.email.asc().nullsLast().op("text_ops"), table.projectId.asc().nullsLast().op("text_ops")),
]);

export const products = pgTable("Products", {
	id: text().notNull(),
	name: text().notNull(),
	description: text().notNull(),
	status: productStatus().default('active').notNull(),
	createdAt: timestamp({ precision: 3, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	updatedAt: timestamp({ precision: 3, mode: 'string' }).notNull(),
	customData: jsonb("custom_data"),
	projectId: text("project_id").notNull(),
});

export const sentEmail = pgTable("SentEmail", {
	id: text().primaryKey().notNull(),
	type: text().notNull(),
	createdAt: timestamp({ precision: 3, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	projectId: text(),
});

export const account = pgTable("Account", {
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
	createdAt: timestamp({ precision: 3, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	updatedAt: timestamp({ precision: 3, mode: 'string' }).notNull(),
});

export const session = pgTable("Session", {
	sessionToken: text().notNull(),
	userId: text().notNull(),
	expires: timestamp({ precision: 3, mode: 'string' }).notNull(),
	createdAt: timestamp({ precision: 3, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	updatedAt: timestamp({ precision: 3, mode: 'string' }).notNull(),
});

export const prices = pgTable("Prices", {
	id: text().primaryKey().notNull(),
	type: priceType().default('standard').notNull(),
	description: text(),
	name: text().notNull(),
	billingCycleFrequency: integer("billing_cycle_frequency").notNull(),
	billingCycleInterval: billingInterval("billing_cycle_interval").notNull(),
	trialPeriodFrequency: integer("trial_period_frequency").notNull(),
	trialPeriodInterval: billingInterval("trial_period_interval").notNull(),
	amount: numeric({ precision: 65, scale:  30 }).notNull(),
	currencyCode: text("currency_code").notNull(),
	customData: jsonb("custom_data"),
	status: entityStatus().notNull(),
	createdAt: timestamp("created_at", { precision: 3, mode: 'string' }).notNull(),
	updatedAt: timestamp("updated_at", { precision: 3, mode: 'string' }).notNull(),
	product_id: text("product_id").notNull(),
	projectId: text().notNull(),
});

export const discounts = pgTable("Discounts", {
	id: text().primaryKey().notNull(),
	status: entityStatus().default('active').notNull(),
	description: text(),
	enabledForCheckout: boolean("enabled_for_checkout"),
	amount: numeric({ precision: 65, scale:  30 }).notNull(),
	currencyCode: text("currency_code").notNull(),
	type: discountType().notNull(),
	recur: boolean(),
	maxRecurringIntervals: numeric("max_recurring_intervals", { precision: 65, scale:  30 }),
	usageLimit: integer("usage_limit"),
	expiresAt: timestamp("expires_at", { precision: 3, mode: 'string' }),
	customData: jsonb("custom_data"),
	timesUsed: integer("times_used").default(0),
	createdAt: timestamp("created_at", { precision: 3, mode: 'string' }).notNull(),
	updatedAt: timestamp("updated_at", { precision: 3, mode: 'string' }).notNull(),
	projectId: text(),
});

export const project = pgTable("Project", {
	id: text().primaryKey().notNull(),
	name: text().notNull(),
	slug: text().notNull(),
	logo: text(),
	plan: text().default('free').notNull(),
	billingCycleStart: integer().notNull(),
	inviteCode: text(),
	createdAt: timestamp({ precision: 3, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	updatedAt: timestamp({ precision: 3, mode: 'string' }).notNull(),
	usageLastChecked: timestamp({ precision: 3, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	paymentProvider: paymentProvider().default('PAYSTACK').notNull(),
});

export const apiKeys = pgTable("Api_keys", {
	id: text().notNull(),
	prefix: text(),
	description: text(),
	createdAt: timestamp({ precision: 3, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	key: text().notNull(),
	userId: text().notNull(),
	project_id: text("project_id"),
});

export const verificationToken = pgTable("VerificationToken", {
	identifier: text().notNull(),
	token: text().notNull(),
	expires: timestamp({ precision: 3, mode: 'string' }).notNull(),
});

export const subscriptionScheduledChanges = pgTable("Subscription_Scheduled_Changes", {
	id: text().primaryKey().notNull(),
	subscriptionId: text("subscription_id").notNull(),
	action: scheduledChangeAction().notNull(),
	effectiveAt: timestamp("effective_at", { precision: 3, mode: 'string' }).notNull(),
	resumesAt: timestamp("resumes_at", { precision: 3, mode: 'string' }),
	status: scheduledChangesStatus().default('scheduled').notNull(),
});

export const discountPrices = pgTable("Discount_Prices", {
	discountId: text("discount_Id").notNull(),
	priceId: text("price_id").notNull(),
});

export const customers = pgTable("Customers", {
	id: text().primaryKey().notNull(),
	email: text().notNull(),
	name: text().notNull(),
	status: entityStatus().default('active').notNull(),
	description: text(),
	customData: jsonb("custom_data"),
	createdAt: timestamp("created_at", { precision: 3, mode: 'string' }).notNull(),
	updatedAt: timestamp("updated_at", { precision: 3, mode: 'string' }).notNull(),
	projectId: text(),
});

export const addresses = pgTable("Addresses", {
	id: text().primaryKey().notNull(),
	description: text(),
	firstLine: text("first_line"),
	customData: jsonb("custom_data"),
	city: text(),
	status: entityStatus().default('active').notNull(),
	createdAt: timestamp("created_at", { precision: 3, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	updatedAt: timestamp("updated_at", { precision: 3, mode: 'string' }).notNull(),
	customerId: text("customer_id"),
});

export const subscriptions = pgTable("Subscriptions", {
	id: text().primaryKey().notNull(),
	status: subscriptionsStatus().notNull(),
	currencyCode: text("currency_code").notNull(),
	createdAt: timestamp("created_at", { precision: 3, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	updatedAt: timestamp("updated_at", { precision: 3, mode: 'string' }).notNull(),
	startedAt: timestamp("started_at", { precision: 3, mode: 'string' }),
	firstBilledAt: timestamp("first_billed_at", { precision: 3, mode: 'string' }),
	nextBilledAt: timestamp("next_billed_at", { precision: 3, mode: 'string' }),
	pausedAt: timestamp("paused_at", { precision: 3, mode: 'string' }),
	canceledAt: timestamp("canceled_at", { precision: 3, mode: 'string' }),
	currentPeriodStarts: timestamp("current_period_starts", { precision: 3, mode: 'string' }),
	currentPeriodEnds: timestamp("current_period_ends", { precision: 3, mode: 'string' }),
	billingCycleInterval: billingInterval("billing_cycle_interval").notNull(),
	billingCycleFrequency: integer("billing_cycle_frequency").notNull(),
	updatePaymentMethodUrl: text("update_payment_method_url"),
	cancelUrl: text("cancel_url"),
	customerId: text("customer_id").notNull(),
	addressId: text("address_id").notNull(),
	projectId: text("project_id").notNull(),
	discountId: text("discount_id"),
	collectionMode: collectionMode("collection_mode").notNull(),
});

export const subscriptionItems = pgTable("SubscriptionItems", {
	id: text().primaryKey().notNull(),
	subscriptionId: text("subscription_id").notNull(),
	priceId: text("price_id").notNull(),
	quantity: integer().notNull(),
	status: subscriptionItemsStatus().notNull(),
	recurring: boolean().notNull(),
	createdAt: timestamp("created_at", { precision: 3, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	updatedAt: timestamp("updated_at", { precision: 3, mode: 'string' }).notNull(),
	previouslyBilledAt: timestamp("previously_billed_at", { precision: 3, mode: 'string' }),
	nextBilledAt: timestamp("next_billed_at", { precision: 3, mode: 'string' }),
	trialStartedAt: timestamp("trial_started_at", { precision: 3, mode: 'string' }),
	trialEndedAt: timestamp("trial_ended_at", { precision: 3, mode: 'string' }),
	customData: jsonb("custom_data"),
});

export const billingDetails = pgTable("BillingDetails", {
	id: text().primaryKey().notNull(),
	subscriptionId: text("subscription_id").notNull(),
	paymentInterval: billingInterval("payment_interval").notNull(),
	paymentFrequency: integer("payment_frequency").notNull(),
	enableCheckout: boolean("enable_checkout").default(false).notNull(),
	purchaseOrderNumber: text("purchase_order_number"),
	additionalInformation: text("additional_information"),
	createdAt: timestamp("created_at", { precision: 3, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	updatedAt: timestamp("updated_at", { precision: 3, mode: 'string' }).notNull(),
});
