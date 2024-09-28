// middleware/validation.js
const validateRegisterInput = (req, res, next) => {
    const { username, email, password } = req.body;
  
    if (!username || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    
    // Add more validation logic if necessary
  
    next();
  };
  
  module.exports = {
    validateRegisterInput,
  };
  