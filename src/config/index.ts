import dotenv from 'dotenv';

const envFound = dotenv.config({
  path: `.env.${process.env.NODE_ENV as string}`,
});

if (envFound.error) throw new Error("⚠️  Couldn't find .env file  ⚠️");

export default {
  port: parseInt(process.env.PORT as string),
  db_type: process.env.DB_TYPE,
  db_port: parseInt(process.env.DB_PORT as string),
  db_host: process.env.DB_HOST,
  db_username: process.env.DB_USERNAME,
  db_password: process.env.PASSWORD,
  db_database: process.env.DB_DATABASE,
};
