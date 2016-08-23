const mongoose = require('mongoose');

const animalScheme = mongoose.Schema({
  name: { type: String, required: true},
  type: { type: String }, // 'cat', 'mongoose'
  age: { type: Number, required: true, min: 0}, //negative age doesn't make sense
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Person'
  }
})

const Animal = mongoose.model('Animal', animalSchema);

module.exports = Animal;
