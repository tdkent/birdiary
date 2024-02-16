import pg from 'pg';

import { dbUsername, dbName, dbPassword } from '../configs/env.config.js';

const pool = new pg.Pool({
	user: dbUsername,
	host: 'localhost',
	database: dbName,
	password: dbPassword,
	port: 5432
});

export default pool;
