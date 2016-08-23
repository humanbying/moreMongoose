const express = require('express');
const router = express.Router();

const Animal = require('...models/animal');

router.route('/')
  .get((req, res) => {
    Animal.find({}, (err, animals) => {
      res.status(err ? 400 : 200).send(err || animals);
    })
  })
  .post((req, res) => {
    Animal.create(req.body, (err, animal) => {
      res.status(err ? 400 : 200).send(err || animal);
    })
  });

module.exports = router;
