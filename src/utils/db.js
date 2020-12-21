const mongoose = require('mongoose');

module.exports.connect = (url = process.env.DB_URL, options = {}) => {
    mongoose.connect(url, {
        ...options,
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true
    });
    mongoose.connection.once('open', _ => {
        console.log('Connection Established');
    }).on('error', _ => {
        console.log('Connection error');
        throw err;
    });
}