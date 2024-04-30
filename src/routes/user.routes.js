const express = require('express');
const {getUser, createUser, updateUser, deleteUser} = require('../controllers/userConntroller.controller.js') 

const route = express.Router();

// API to Get a User
route.get('/users', getUser);
  
// API to Create a New User
route.post('/users', createUser);

// API to Update a User
route.put('/users/:id', updateUser);

// API to Delete a User
route.delete('/users/:id', deleteUser);

module.exports = route;