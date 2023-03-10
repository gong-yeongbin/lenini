import 'reflect-metadata';
import express, { Express } from 'express';
import config from './config';
import './data-source';
import index from './routes/index';

const app: Express = express();
app.use('/', index);

app
  .listen(3000, () => {
    console.log(
      `
      ###############################################
              Server listening on port : ${config.port}        
      ###############################################
    `
    );
  })
  .on('error', (err) => {
    console.error(err);
    process.exit(1);
  });
