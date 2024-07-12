const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    if (!req.headers.authorization)
      throw new Error(' Authentication Failed. Bearer Token required!');
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, 'defaultsecret');
    console.log('test', decoded);
    req.user = decoded;
    next();
  } catch (error) {
    console.log(error.message);
    return res.status(401).json({
      message: 'Authentication failed!',
    });
  }
};
