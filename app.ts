import express, {Express, Request, Response} from 'express';
import bodyParser from 'body-parser';

const app: Express = express();

import { indexRouter } from './src/routes/index_router'

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(indexRouter)

export default app