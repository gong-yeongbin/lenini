import express, { Express } from 'express';
import config from './config';

const app: Express = express();

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
