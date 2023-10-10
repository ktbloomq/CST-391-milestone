import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';

import logger from './middleware/middleware.logger';
import prayersRouter from './prayers/prayers.routes';



dotenv.config();
const app = express();
const port = process.env.PORT;
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(helmet());

if(process.env.NODE_ENV == 'development') {
    app.use(logger);
    console.log(process.env.GREETING + ' in dev mode');
}

app.use('/', [prayersRouter]);

app.listen(port, () => {
    // indicate that the server is initialized
    console.log(`Example app listening at http://localhost:${port}`);
});
