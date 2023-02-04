import dotenv from 'dotenv';

const envFound = dotenv.config({
  path:
    process.env.NODE_ENV == undefined || process.env.NODE_ENV == 'local'
      ? `.env.local`
      : `.env.${process.env.NODE_ENV}`,
});

if (envFound.error) throw new Error("⚠️  Couldn't find .env file  ⚠️");

export default {
  port: parseInt(process.env.PORT as string),
  db_type: process.env.DB_TYPE,
  db_port: parseInt(process.env.DB_PORT as string),
  db_host: process.env.DB_HOST,
  db_username: process.env.DB_USERNAME,
  db_password: process.env.DB_PASSWORD,
  db_database: process.env.DB_DATABASE,
};
