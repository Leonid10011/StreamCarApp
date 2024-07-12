const { validationResult } = require('express-validator');
const logger = require('../../utility/logger');

module.exports = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    logger.error(errors.array()[0]);
    return res.status(400).json(errors.array()[0].msg);
  }
  next();
};
