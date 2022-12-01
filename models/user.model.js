// models/User.model.js
const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    favoritePairing: {
      wine: {type: Schema.Types.ObjectId, ref: "Wine"},
      cheese: {type: Schema.Types.ObjectId, ref: "Cheese"},
    }
  },
);

module.exports = model('User', userSchema);
