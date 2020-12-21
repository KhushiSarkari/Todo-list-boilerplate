const express = require('express');
const cors = require('cors');
const { json, urlencoded } = require('body-parser');
const { connect } = require('./src/utils/db');
const morgan = require('morgan');

const app = express();

app.disable('x-powered-by');

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
if (process.env.NODE_ENV == 'development')
    app.use(morgan('dev'));

module.exports.start = async () => {
    try {
        await connect();
        const port = process.env.PORT || 3000;
        app.listen(port, () => {
            console.log(`REST API on http://localhost:${port}/api`)
        });
    } catch (e) {
        console.error(e);
    }
}