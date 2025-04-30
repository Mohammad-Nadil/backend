import dotenv from 'dotenv';

dotenv.config({
  path: '.env',
});

const NODE_ENV = process.env.NODE_ENV ?? 'development';

// Server
const PORT = process.env.PORT ?? 5000;
const WHITELIST_DOMAINS = process.env.WHITELIST_DOMAINS;

// Database
const MONGO_DB = process.env.MONGO_DB;

// mail
const MAIL_HOST = process.env.MAIL_HOST;
const MAIL_PORT = process.env.MAIL_PORT;
const MAIL_USERNAME = process.env.MAIL_USERNAME;
const MAIL_PASSWORD = process.env.MAIL_PASSWORD;

export { PORT, WHITELIST_DOMAINS, MONGO_DB, MAIL_HOST, MAIL_PORT, MAIL_USERNAME, MAIL_PASSWORD };
