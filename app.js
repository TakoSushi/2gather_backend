require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const { limiterConfig, serverPort, dbAddress } = require('./utils/constants');
const routes = require('./routes');

const { PORT = serverPort, DB_URL = dbAddress } = process.env;

const limiter = rateLimit(limiterConfig);

mongoose.connect(DB_URL)
  .then(() => console.log('connected DB'))
  .catch(() => console.log('no connetcion'));

const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
  optionSuccessStatus: 200,
}));

app.use(cookieParser());
app.use(helmet());
app.use(bodyParser.json());

app.use(limiter, routes);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
