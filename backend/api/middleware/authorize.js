const authorize = (roles) => {
  return (req, res, next) => {
    console.log(req.user);
    const userRole = req.user.role; // Assuming role is stored in req.user.role
    if (roles.includes(userRole)) {
      next(); // User's role is authorized, so continue to the next middleware or route handler
    } else {
      res.status(403).json({ message: 'Forbidden' }); // User's role is not authorized
    }
  };
};

module.exports = authorize;
