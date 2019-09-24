require('dotenv').config();
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser';
import router from 'routes/';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(router);

const { APP_PORT } = process.env;
app.listen(APP_PORT, () => console.log(`Server has started on port ${APP_PORT}.`));
