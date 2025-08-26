/* 
- Added Neon serverless PostgreSQL client configuration
- Connected to database using DATABASE_URL from environment variables
- Exported sql instance for running queries across the app
*/

import { neon } from "@neondatabase/serverless";

const sql = neon(`${process.env.DATABASE_URL}`);

export default sql;
