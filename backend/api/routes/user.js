const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { body, param } = require('express-validator');
const User = require('../../models/user');
const validateRequest = require('../middleware/validateRequest');
const logger = require('../../utility/logger');
const checkAuth = require('../middleware/check-auth');
const authorize = require('../middleware/authorize');
const validationErrorMongooseModel = require('../../utility/validationErrorMongooseModel');

router.post(
  '/signup',
  body('email').isEmail().withMessage('Invalid email'),
  body('password')
    .isLength({ min: 4 })
    .withMessage('Password must be at least 4 characters long'),
  body('role').notEmpty().withMessage('Role required'),
  validateRequest,
  async (req, res) => {
    try {
      const existingUser = await User.findOne({ email: req.body.email }).exec();
      if (existingUser) {
        logger.info('Signup attempt with existing email: %s', req.body.email);
        return res.status(409).json({ message: 'Email already exists' });
      }

      const hash = await bcrypt.hash(req.body.password, 10);
      const user = new User({
        _id: new mongoose.Types.ObjectId(),
        email: req.body.email,
        password: hash,
        role: req.body.role,
      });
      await user.save();
      logger.info('User created with email: %s', req.body.email);
      res.status(201).json({ message: 'User created' });
    } catch (error) {
      if (error.name === 'ValidationError') {
        validationErrorMongooseModel(res, error);
      } else {
        logger.error('Error during signup: %s', error.message);
        res.status(500).json({ error: error.message });
      }
    }
  },
);

router.post(
  '/login',
  body('email').isEmail().withMessage('Invalid email'),
  body('password').notEmpty().withMessage('Password is required'),
  validateRequest,
  async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email }).exec();
      if (!user) {
        logger.info('Login attempt failed for email: %s', req.body.email);
        return res.status(401).json({ message: 'Authentication failed' });
      }

      const match = await bcrypt.compare(req.body.password, user.password);
      if (!match) {
        logger.info(
          'Login attempt with invalid password for email: %s',
          req.body.email,
        );
        return res.status(401).json({ message: 'Authentication failed' });
      }

      const token = jwt.sign(
        { email: user.email, userId: user._id, role: user.role },
        process.env.JWT_SECRET || 'defaultsecret',
        { expiresIn: '24h' },
      );

      logger.info('User logged in: %s', req.body.email);
      res
        .status(200)
        .json({ message: 'Authentication successful', token: token });
    } catch (error) {
      logger.error('Error during login: %s', error.message);
      res.status(500).json({ error: error.message });
    }
  },
);

router.delete(
  '/:userId',
  param('userId').isMongoId().withMessage('Invalid user ID'),
  validateRequest,
  checkAuth,
  authorize(['admin']),
  async (req, res) => {
    try {
      await User.deleteOne({ _id: req.params.userId }).exec();
      logger.info('User deleted with ID: %s', req.params.userId);
      res.status(200).json({ message: 'User deleted' });
    } catch (error) {
      logger.error('Error during user deletion: %s', error.message);
      res.status(500).json({ error: error.message });
    }
  },
);

module.exports = router;
