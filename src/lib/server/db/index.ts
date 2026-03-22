import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';
import { env } from '$env/dynamic/private';

// const DATABASE_URL = process.env.DATABASE_URL || 'postgres://localhost:5432/db';

const client = postgres(env.DATABASE_URL);

export const db = drizzle(client, { schema });
