-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TYPE "public"."BillingInterval" AS ENUM('day', 'week', 'month', 'year');--> statement-breakpoint
CREATE TYPE "public"."CollectionMode" AS ENUM('automatic', 'manual');--> statement-breakpoint
CREATE TYPE "public"."Discount_type" AS ENUM('flat', 'percentage', 'flat_per_seat');--> statement-breakpoint
CREATE TYPE "public"."Entity_Status" AS ENUM('active', 'archived');--> statement-breakpoint
CREATE TYPE "public"."PaymentMethod" AS ENUM('MOBILE_MONEY', 'CARD', 'BANK_TRANSFER');--> statement-breakpoint
CREATE TYPE "public"."PaymentProvider" AS ENUM('MPESA', 'AIRTEL', 'MTN', 'STRIPE', 'PAYSTACK', 'FLUTTERWAVE', 'TIGO', 'ORANGE', 'DPO', 'SELCOM');--> statement-breakpoint
CREATE TYPE "public"."PaymentStatus" AS ENUM('PENDING', 'PROCESSING', 'COMPLETED', 'FAILED', 'REFUNDED');--> statement-breakpoint
CREATE TYPE "public"."PriceType" AS ENUM('standard', 'custom');--> statement-breakpoint
CREATE TYPE "public"."Role" AS ENUM('owner', 'member');--> statement-breakpoint
CREATE TYPE "public"."ScheduledChangeAction" AS ENUM('pause', 'resume', 'cancel');--> statement-breakpoint
CREATE TYPE "public"."ScheduledChangesStatus" AS ENUM('completed', 'scheduled');--> statement-breakpoint
CREATE TYPE "public"."SubscriptionItemsStatus" AS ENUM('active', 'inactive', 'trialing');--> statement-breakpoint
CREATE TYPE "public"."SubscriptionsStatus" AS ENUM('active', 'cancelled', 'past_due', 'paused', 'trial');--> statement-breakpoint
CREATE TYPE "public"."TransactionStatus" AS ENUM('billed', 'cancelled');--> statement-breakpoint
CREATE TYPE "public"."product_status" AS ENUM('active', 'archived');--> statement-breakpoint
CREATE TABLE "ProjectUsers" (
	"id" text PRIMARY KEY NOT NULL,
	"role" "Role" DEFAULT 'member' NOT NULL,
	"createdAt" timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updatedAt" timestamp(3) NOT NULL,
	"userId" text NOT NULL,
	"projectId" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "Transactions" (
	"id" text PRIMARY KEY NOT NULL,
	"status" "TransactionStatus" NOT NULL,
	"customer_id" text NOT NULL,
	"address_id" text NOT NULL,
	"project_id" text NOT NULL,
	"product_id" text NOT NULL,
	"subscription_id" text,
	"subtotal" numeric(65, 30) NOT NULL,
	"discount_ammount" numeric(65, 30) NOT NULL,
	"total" numeric(65, 30) NOT NULL,
	"grand_total" numeric(65, 30) NOT NULL,
	"discount_id" text,
	"invoice_id" text NOT NULL,
	"current_period_starts" timestamp(3),
	"current_period_ends" timestamp(3),
	"custom_data" jsonb,
	"currency_code" text NOT NULL,
	"collection_mode" "CollectionMode" NOT NULL,
	"created_at" timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" timestamp(3)
);
--> statement-breakpoint
CREATE TABLE "TransactionPayment" (
	"id" text PRIMARY KEY NOT NULL,
	"transaction_id" text NOT NULL,
	"payment_method" "PaymentMethod" NOT NULL,
	"payment_provider" "PaymentProvider" NOT NULL,
	"status" "PaymentStatus" DEFAULT 'PENDING' NOT NULL,
	"amount" numeric(65, 30) NOT NULL,
	"currency_code" text NOT NULL,
	"mobile_network" text,
	"phone_suffix" text,
	"card_last4" text,
	"card_brand" text,
	"card_exp_month" integer,
	"card_exp_year" integer,
	"card_holder_name" text,
	"bank_reference" text,
	"bank_name" text,
	"provider_reference" text,
	"provider_metadata" jsonb,
	"error_message" text,
	"created_at" timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" timestamp(3)
);
--> statement-breakpoint
CREATE TABLE "TransactionItems" (
	"id" text PRIMARY KEY NOT NULL,
	"price_id" text NOT NULL,
	"quantity" integer NOT NULL,
	"transactionsId" text
);
--> statement-breakpoint
CREATE TABLE "CheckoutItems" (
	"id" text PRIMARY KEY NOT NULL,
	"price_id" text NOT NULL,
	"quantity" integer NOT NULL,
	"checkoutId" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "Checkouts" (
	"id" text PRIMARY KEY NOT NULL,
	"customer_id" text NOT NULL,
	"project_id" text NOT NULL,
	"created_at" timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"discount_id" text,
	"discount_ammount" numeric(65, 30) NOT NULL,
	"grand_total" numeric(65, 30) NOT NULL,
	"total" numeric(65, 30) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "User" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text,
	"email" text,
	"emailVerified" timestamp(3),
	"image" text,
	"source" text,
	"defaultWorkspace" text,
	"createdAt" timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updatedAt" timestamp(3) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "ProjectInvite" (
	"email" text NOT NULL,
	"expires" timestamp(3) NOT NULL,
	"projectId" text NOT NULL,
	"createdAt" timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE TABLE "Products" (
	"id" text NOT NULL,
	"name" text NOT NULL,
	"description" text NOT NULL,
	"status" "product_status" DEFAULT 'active' NOT NULL,
	"createdAt" timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updatedAt" timestamp(3) NOT NULL,
	"custom_data" jsonb,
	"project_id" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "SentEmail" (
	"id" text PRIMARY KEY NOT NULL,
	"type" text NOT NULL,
	"createdAt" timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"projectId" text
);
--> statement-breakpoint
CREATE TABLE "Account" (
	"userId" text NOT NULL,
	"type" text NOT NULL,
	"provider" text NOT NULL,
	"providerAccountId" text NOT NULL,
	"refresh_token" text,
	"access_token" text,
	"expires_at" integer,
	"token_type" text,
	"scope" text,
	"id_token" text,
	"session_state" text,
	"createdAt" timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updatedAt" timestamp(3) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "Session" (
	"sessionToken" text NOT NULL,
	"userId" text NOT NULL,
	"expires" timestamp(3) NOT NULL,
	"createdAt" timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updatedAt" timestamp(3) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "Prices" (
	"id" text PRIMARY KEY NOT NULL,
	"type" "PriceType" DEFAULT 'standard' NOT NULL,
	"description" text,
	"name" text NOT NULL,
	"billing_cycle_frequency" integer NOT NULL,
	"billing_cycle_interval" "BillingInterval" NOT NULL,
	"trial_period_frequency" integer NOT NULL,
	"trial_period_interval" "BillingInterval" NOT NULL,
	"amount" numeric(65, 30) NOT NULL,
	"currency_code" text NOT NULL,
	"custom_data" jsonb,
	"status" "Entity_Status" NOT NULL,
	"created_at" timestamp(3) NOT NULL,
	"updated_at" timestamp(3) NOT NULL,
	"product_id" text NOT NULL,
	"projectId" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "Discounts" (
	"id" text PRIMARY KEY NOT NULL,
	"status" "Entity_Status" DEFAULT 'active' NOT NULL,
	"description" text,
	"enabled_for_checkout" boolean,
	"amount" numeric(65, 30) NOT NULL,
	"currency_code" text NOT NULL,
	"type" "Discount_type" NOT NULL,
	"recur" boolean,
	"max_recurring_intervals" numeric(65, 30),
	"usage_limit" integer,
	"expires_at" timestamp(3),
	"custom_data" jsonb,
	"times_used" integer DEFAULT 0,
	"created_at" timestamp(3) NOT NULL,
	"updated_at" timestamp(3) NOT NULL,
	"projectId" text
);
--> statement-breakpoint
CREATE TABLE "Project" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"slug" text NOT NULL,
	"logo" text,
	"plan" text DEFAULT 'free' NOT NULL,
	"billingCycleStart" integer NOT NULL,
	"inviteCode" text,
	"createdAt" timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updatedAt" timestamp(3) NOT NULL,
	"usageLastChecked" timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"paymentProvider" "PaymentProvider" DEFAULT 'PAYSTACK' NOT NULL
);
--> statement-breakpoint
CREATE TABLE "Api_keys" (
	"id" text NOT NULL,
	"prefix" text,
	"description" text,
	"createdAt" timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"key" text NOT NULL,
	"userId" text NOT NULL,
	"project_id" text
);
--> statement-breakpoint
CREATE TABLE "VerificationToken" (
	"identifier" text NOT NULL,
	"token" text NOT NULL,
	"expires" timestamp(3) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "Subscription_Scheduled_Changes" (
	"id" text PRIMARY KEY NOT NULL,
	"subscription_id" text NOT NULL,
	"action" "ScheduledChangeAction" NOT NULL,
	"effective_at" timestamp(3) NOT NULL,
	"resumes_at" timestamp(3),
	"status" "ScheduledChangesStatus" DEFAULT 'scheduled' NOT NULL
);
--> statement-breakpoint
CREATE TABLE "Discount_Prices" (
	"discount_Id" text NOT NULL,
	"price_id" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "Customers" (
	"id" text PRIMARY KEY NOT NULL,
	"email" text NOT NULL,
	"name" text NOT NULL,
	"status" "Entity_Status" DEFAULT 'active' NOT NULL,
	"description" text,
	"custom_data" jsonb,
	"created_at" timestamp(3) NOT NULL,
	"updated_at" timestamp(3) NOT NULL,
	"projectId" text
);
--> statement-breakpoint
CREATE TABLE "Addresses" (
	"id" text PRIMARY KEY NOT NULL,
	"description" text,
	"first_line" text,
	"custom_data" jsonb,
	"city" text,
	"status" "Entity_Status" DEFAULT 'active' NOT NULL,
	"created_at" timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" timestamp(3) NOT NULL,
	"customer_id" text
);
--> statement-breakpoint
CREATE TABLE "Subscriptions" (
	"id" text PRIMARY KEY NOT NULL,
	"status" "SubscriptionsStatus" NOT NULL,
	"currency_code" text NOT NULL,
	"created_at" timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" timestamp(3) NOT NULL,
	"started_at" timestamp(3),
	"first_billed_at" timestamp(3),
	"next_billed_at" timestamp(3),
	"paused_at" timestamp(3),
	"canceled_at" timestamp(3),
	"current_period_starts" timestamp(3),
	"current_period_ends" timestamp(3),
	"billing_cycle_interval" "BillingInterval" NOT NULL,
	"billing_cycle_frequency" integer NOT NULL,
	"update_payment_method_url" text,
	"cancel_url" text,
	"customer_id" text NOT NULL,
	"address_id" text NOT NULL,
	"project_id" text NOT NULL,
	"discount_id" text,
	"collection_mode" "CollectionMode" NOT NULL
);
--> statement-breakpoint
CREATE TABLE "SubscriptionItems" (
	"id" text PRIMARY KEY NOT NULL,
	"subscription_id" text NOT NULL,
	"price_id" text NOT NULL,
	"quantity" integer NOT NULL,
	"status" "SubscriptionItemsStatus" NOT NULL,
	"recurring" boolean NOT NULL,
	"created_at" timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" timestamp(3) NOT NULL,
	"previously_billed_at" timestamp(3),
	"next_billed_at" timestamp(3),
	"trial_started_at" timestamp(3),
	"trial_ended_at" timestamp(3),
	"custom_data" jsonb
);
--> statement-breakpoint
CREATE TABLE "BillingDetails" (
	"id" text PRIMARY KEY NOT NULL,
	"subscription_id" text NOT NULL,
	"payment_interval" "BillingInterval" NOT NULL,
	"payment_frequency" integer NOT NULL,
	"enable_checkout" boolean DEFAULT false NOT NULL,
	"purchase_order_number" text,
	"additional_information" text,
	"created_at" timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" timestamp(3) NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX "ProjectUsers_userId_projectId_key" ON "ProjectUsers" USING btree ("userId" text_ops,"projectId" text_ops);--> statement-breakpoint
CREATE UNIQUE INDEX "ProjectInvite_email_projectId_key" ON "ProjectInvite" USING btree ("email" text_ops,"projectId" text_ops);
*/