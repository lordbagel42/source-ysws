import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';

// Use process.env for CLI compatibility, and fallback to empty string to avoid crashes during build if not needed
const DATABASE_URL = process.env.DATABASE_URL || '';

const client = postgres(DATABASE_URL || 'postgres://localhost:5432/db');

export const db = drizzle(client, { schema });
