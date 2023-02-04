import 'reflect-metadata';
import { DataSource } from 'typeorm';
import config from './config';

const AppDataSource = new DataSource({
  type: 'mysql',
  host: config.db_host,
  port: config.db_port,
  username: config.db_username,
  password: config.db_password,
  database: config.db_database,
  entities: [__dirname + '/entities/*.{ts,js}'],
  synchronize: false,
  logging: false,
  migrations: [__dirname + '/migrations/*.{ts,js}'],
});

AppDataSource.initialize()
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

export default AppDataSource;
