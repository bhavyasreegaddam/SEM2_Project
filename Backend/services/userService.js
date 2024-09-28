// services/userService.js
const userRepository = require('../repositories/userRepository');

const registerUser = async (username, email, password) => {
  // Check if user already exists
  const existingUser = await userRepository.findUserByEmail(email);
  if (existingUser) {
    throw new Error('User already exists');
  }

  // Create new user
  const newUser = {
    username,
    email,
    password, // Password should ideally be hashed before saving
  };
  
  await userRepository.createUser(newUser);

  return { message: 'Registration successful' };
};

module.exports = {
  registerUser,
};
