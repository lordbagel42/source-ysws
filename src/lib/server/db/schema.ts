import { pgTable, serial, integer, text, timestamp, decimal, boolean } from 'drizzle-orm/pg-core';
import { user } from './auth.schema';

export const profiles = pgTable('profiles', {
	id: serial('id').primaryKey(),
	userId: text('user_id')
		.notNull()
		.references(() => user.id, { onDelete: 'cascade' }),
	operatorName: text('operator_name').notNull(),
	status: text('status').notNull().default('ACTIVE'),
	avatarUrl: text('avatar_url'),
	createdAt: timestamp('created_at').notNull().defaultNow(),
	updatedAt: timestamp('updated_at').notNull().defaultNow()
});

export const shipments = pgTable('shipments', {
	id: serial('id').primaryKey(),
	userId: text('user_id')
		.notNull()
		.references(() => user.id, { onDelete: 'cascade' }),
	title: text('title').notNull(),
	description: text('description'),
	imageUrl: text('image_url'),
	isPublic: boolean('is_public').notNull().default(true),
	createdAt: timestamp('created_at').notNull().defaultNow(),
	updatedAt: timestamp('updated_at').notNull().defaultNow()
});

export const hardwareRequests = pgTable('hardware_requests', {
	id: serial('id').primaryKey(),
	userId: text('user_id')
		.notNull()
		.references(() => user.id, { onDelete: 'cascade' }),
	shipmentId: integer('shipment_id').references(() => shipments.id, { onDelete: 'cascade' }),
	vendor: text('vendor').notNull(), // e.g., 'DIGIKEY_ELECTRONICS'
	componentUrl: text('component_url').notNull(),
	unitPrice: decimal('unit_price', { precision: 10, scale: 2 }).notNull(),
	quantity: integer('quantity').notNull().default(1),
	status: text('status').notNull().default('PENDING'), // 'PENDING', 'APPROVED', 'SHIPPED', 'CANCELLED'
	createdAt: timestamp('created_at').notNull().defaultNow(),
	updatedAt: timestamp('updated_at').notNull().defaultNow()
});

export const activityLogs = pgTable('activity_logs', {
	id: serial('id').primaryKey(),
	userId: text('user_id')
		.notNull()
		.references(() => user.id, { onDelete: 'cascade' }),
	activityType: text('activity_type').notNull(), // 'COMMIT', 'SOLDER', 'PR', etc.
	description: text('description'),
	timestamp: timestamp('timestamp').notNull().defaultNow()
});

export const streaks = pgTable('streaks', {
	id: serial('id').primaryKey(),
	userId: text('user_id')
		.notNull()
		.references(() => user.id, { onDelete: 'cascade' })
		.unique(),
	currentStreak: integer('current_streak').notNull().default(0),
	maxStreak: integer('max_streak').notNull().default(0),
	lastActivityDate: timestamp('last_activity_date'),
	updatedAt: timestamp('updated_at').notNull().defaultNow()
});

export * from './auth.schema';
