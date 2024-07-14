const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const questionRoute = require('./api/routes/questions');
const imageRoute = require('./api/routes/guessImage');
const videoRoute = require('./api/routes/zoomVideo');
const userRoutes = require('./api/routes/user');
const notificationRoutes = require('./api/routes/notification');
const readStatusRoutes = require('./api/routes/readStatus');
const morgan = require('morgan');
const connectDb = require('./db');

const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

// Mongoose connection
connectDb();

// Routes
app.use('/questions', questionRoute);
app.use('/images', imageRoute);
app.use('/videos', videoRoute);
app.use('/users', userRoutes);
app.use('/notifications', notificationRoutes);
app.use('/notifications/readstatus', readStatusRoutes);

// Error handling
app.use((error, req, res) => {
  console.error('Error stack:', error.stack); // Log the full error stack
  console.error('Request URL:', req.originalUrl); // Log the request URL
  console.error('Request Method:', req.method); // Log the request method
  console.error('Request Body:', req.body); // Log the request body
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
