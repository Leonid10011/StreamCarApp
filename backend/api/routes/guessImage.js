const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const GuessImage = require('../../models/guessImage');
const { body, param } = require('express-validator');
const validateRequest = require('../middleware/validateRequest');
const logger = require('../../utility/logger');
const authorize = require('../middleware/authorize');
const checkAuth = require('../middleware/check-auth');
const validationErrorMongooseModel = require('../../utility/validationErrorMongooseModel');

// Get all guess images
router.get('/guess', checkAuth, async (req, res) => {
  try {
    logger.info('Fetching all guess images');
    const docs = await GuessImage.find().exec();
    logger.info('Fetched all guess images successfully');
    res.status(200).json(docs);
  } catch (error) {
    logger.error('Error fetching guess images', { error: error.message });
    res.status(500).json({ error: error.message });
  }
});

// Add a new guess image
router.post(
  '/guess',
  body('location').notEmpty().withMessage('Pfad zum Bild darf nicht leer sein'),
  body('question').notEmpty().withMessage('Frage darf nicht leer sein'),
  body('answers').notEmpty().withMessage('Antwort darf nicht leer sein'),
  validateRequest,
  checkAuth,
  async (req, res) => {
    const { location, question, answers } = req.body;
    const image = new GuessImage({
      _id: new mongoose.Types.ObjectId(),
      location,
      question,
      answers,
    });

    try {
      logger.info('Creating a new guess image', {
        location,
        question,
        answers,
      });
      const result = await image.save();
      logger.info('Created new guess image successfully', {
        createdImage: result,
      });
      res.status(201).json({
        message: 'Created new guess image',
        createdImage: result,
      });
    } catch (error) {
      if (error.name === 'ValidationError') {
        validationErrorMongooseModel(res, error);
      } else {
        logger.error('Error creating guess image', { error: error.message });
        res.status(500).json({ error: error.message });
      }
    }
  },
);

// Drop the entire collection
router.delete('/guess', checkAuth, authorize(['admin']), async (req, res) => {
  try {
    logger.warn('Dropping the entire guess images collection');
    await GuessImage.collection.drop();
    logger.info('Dropped the entire guess images collection successfully');
    res.status(204).send();
  } catch (error) {
    logger.error('Error dropping the guess images collection', {
      error: error.message,
    });
    res.status(500).json({ error: error.message });
  }
});

// Delete a specific guess image by ID
router.delete(
  '/guess/:imageId',
  param('imageId').isMongoId().withMessage('Invalid image ID'),
  validateRequest,
  checkAuth,
  async (req, res) => {
    const { imageId } = req.params;
    try {
      logger.info('Deleting guess image', { imageId });
      const result = await GuessImage.deleteOne({ _id: imageId }).exec();
      if (result.deletedCount === 0) {
        logger.warn('Guess image not found', { imageId });
        return res.status(404).json({ message: 'Image not found' });
      }
      logger.info('Deleted guess image successfully', { imageId });
      res.status(204).send();
    } catch (error) {
      logger.error('Error deleting guess image', {
        error: error.message,
        imageId,
      });
      res.status(500).json({ error: error.message });
    }
  },
);

module.exports = router;
