const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({}, { timestamps: true });

const Item = mongoose.model('item', itemSchema);

module.exports = Item;