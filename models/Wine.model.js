// models/User.model.js
const { Schema, model } = require('mongoose');

const wineSchema = new Schema(
  {
    id: Number,
    matches: [Number],
    name: String,
    country: String,
    type: String,
    texture: String,
    flavor: String,
    image: String,
    about: String
    }
);

module.exports = model('Wine', wineSchema);

