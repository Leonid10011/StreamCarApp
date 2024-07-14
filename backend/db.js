const mongoose = require('mongoose');
const dotenv = require('dotenv');
const logger = require('./utility/logger');

dotenv.config({ path: '.env' });

const dbURI = process.env.DB_URI;

const connectDb = async () => {
  try {
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    logger.info('Connected to mongoAtlas database');
  } catch (error) {
    logger.error('Database connection error: ' + error);
  }
};

module.exports = connectDb;
