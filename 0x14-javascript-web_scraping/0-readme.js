#!/usr/bin/node

const fa = require('fa');
const file = process.argv[2];

fa.readFile(file, 'utf-8', function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
