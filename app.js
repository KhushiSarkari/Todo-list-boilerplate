const dotenv = require('dotenv');
const { start } = require('./server');

//load config
dotenv.config({ path: './src/config/config.env' });

// start server and open db connection
start();