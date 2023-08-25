
import 'dotenv/config';
import pg from 'pg-promise';
import promise from 'bluebird';

const pgp = pg({ promiseLib: promise, noLocking: true });
const db = pgp({
  host: String(process.env.DATABASE_HOST),
  port: Number(process.env.DATABASE_PORT),
  database: String(process.env.DATABASE_NAME),
  user: String(process.env.DATABASE_USER),
  password: String(process.env.DATABASE_PASSWORD),
});

export { db };
