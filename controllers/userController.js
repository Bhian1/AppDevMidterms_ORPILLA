const userModel = require('../models/userModel');
let users = require('../data/users.json');

// Register a new user
const register = (req, res) => {
  const { username, password, email } = req.body;
  if (!username || !password || !email) {
    return res.status(400).send('All fields are required');
  }

  const userExists = users.some(user => user.username === username);
  if (userExists) {
    return res.status(409).send('Username already taken');
  }

  const newUser = {
    id: users.length + 1,
    username,
    password,  // In a real app, you should hash passwords
    email
  };
  users.push(newUser);

  res.status(201).send('User registered successfully');
};

// User login
const login = (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);

  if (!user) {
    return res.status(401).send('Invalid credentials');
  }

  const token = 'mysecuretoken';  // Simulating a token
  res.status(200).json({ message: 'Login successful', token });
};

// Get profile
const getProfile = (req, res) => {
  const user = users.find(u => u.id === req.user.id);
  if (!user) {
    return res.status(404).send('User not found');
  }

  res.status(200).json({
    id: user.id,
    username: user.username,
    email: user.email
  });
};

// Export functions correctly
module.exports = {
  register,
  login,
  getProfile
};