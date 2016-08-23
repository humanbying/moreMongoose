const mongoose = require('mongoose');

const personScheme = mongoose.Schema({
  name: { type: String, required: true},
  email: { type: String },
  
  // 5 we can do this as well
  // animals: {[
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Animal' }]
  // }
});

const Person = mongoose.model('Person', personSchema);

module.exports = Person;
