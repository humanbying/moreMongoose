
**point of interest**

const mongoose = require('mongoose');

const animalScheme = mongoose.Schema({
  name: { type: String, required: true},
  type: { type: String }, // 'cat', 'mongoose'
  age: { type: Number, required: true, min: 0}, //negative age doesn't make sense

  // 1 instead of doing this,
  // owner: {
  //   name: { type: String, required: true},
  //   email: { type: String }
  // }

  // 2 we can do this
  // owner: { type: String, required: true};

  // 3 and even better, this,
  //we will keep the native object id as a reference
  //a key called owner

  // 4,6
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Person'
  }
})

const Animal = mongoose.model('Animal', animalSchema);

module.exports = Animal;
