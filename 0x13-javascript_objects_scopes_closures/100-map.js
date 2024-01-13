#!/usr/bin/node
// Importing the array from the file 100-data.js
const { list } = require('./100-data');

// Using the map function to create a new array based on the specified conditions
const newList = list.map((value, index) => value * index);

// Printing the initial list
console.log("Initial List:", list);

// Printing the new list
console.log("New List:", newList);

