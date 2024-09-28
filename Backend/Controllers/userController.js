// controllers/userController.js
const userService = require('../services/userService');

const register = async (req, res) => {
  const { username, email, password } = req.body;

  // Validate inputs
  if (!username || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const response = await userService.registerUser(username, email, password);
    return res.status(201).json(response);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = {
  register,
};
