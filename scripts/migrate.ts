import { drizzle } from 'drizzle-orm/neon-http';
import { migrate } from 'drizzle-orm/neon-http/migrator';
import { neon } from '@neondatabase/serverless';
import * as dotenv from 'dotenv';

dotenv.config();

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
	console.error('DATABASE_URL is not set');
	process.exit(1);
}

// Log a masked version of the connection string to confirm the host
const maskedUrl = databaseUrl.replace(/:([^@]+)@/, ':****@');
console.log(`Connecting to database for migration: ${maskedUrl}`);

const runMigrate = async () => {
	const sql = neon(databaseUrl);
	const db = drizzle(sql);

	console.log('Running migrations...');

	const start = Date.now();

	try {
		await migrate(db, { migrationsFolder: 'drizzle' });
		const end = Date.now();
		console.log(`Migrations completed in ${end - start}ms`);
	} catch (err) {
		console.error('Migrations failed');
		console.error(err);
		process.exit(1);
	}

	process.exit(0);
};

runMigrate().catch((err) => {
	console.error('Unhandled migration error');
	console.error(err);
	process.exit(1);
});
