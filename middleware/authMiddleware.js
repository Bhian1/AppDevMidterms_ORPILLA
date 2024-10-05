const authenticate = (req, res, next) => {
    const token = req.headers.authorization;
  
    if (!token || token !== 'Bearer mysecuretoken') {
      return res.status(401).send('Unauthorized');
    }
  
    // Simulate a user by attaching user info to request
    req.user = { id: 1, username: 'admin' };  // Simulated user data
  
    next();
  };
  
  module.exports = { authenticate };