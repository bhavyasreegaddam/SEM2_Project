// repositories/userRepository.js
const User = require('../models/userModel');

const findUserByEmail = (email) => {
  return User.findOne({ email });
};

const createUser = (userData) => {
  const newUser = new User(userData);
  return newUser.save();
};

module.exports = {
  findUserByEmail,
  createUser,
};
