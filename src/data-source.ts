import 'reflect-metadata';
import { DataSource } from 'typeorm';
import config from './config';

const connectDB = new DataSource({
  type: 'mysql',
  host: config.db_host,
  port: config.db_port,
  username: config.db_username,
  password: config.db_password,
  database: config.db_database,
  entities: [],
  synchronize: false,
  logging: false,
});

connectDB
  .initialize()
  .then(() => {
    console.log(
      `
      ###############################################
              Data Source has been initialized!
      ###############################################
    `
    );
  })
  .catch((error) => console.log(error));

export default connectDB;
