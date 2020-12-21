const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({}, { timestamps: true }
);

const List = mongoose.model('list', listSchema);

module.exports = List;
