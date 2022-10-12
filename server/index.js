import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

// import { application } from 'express';
import authRoute from './routes/auth.js';
import hotelRoute from './routes/hotels.js';
import roomRoute from './routes/rooms.js';
import userRoute from './routes/users.js';

const app = express();
dotenv.config();

const connetdb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB);
    console.log('connected to mongodb server success!');
  } catch (error) {
    return error;
  }
};

mongoose.connection.on('disconnected', () => {
  console.log('MongoDb server disconnected');
});
mongoose.connection.on('connected', () => {
  console.log('MongoDb server connected');
});

app.get('/users', (req, res) => {
  res.send('first request');
});

// Mengatasi Error CORS ORIGIN pada API
app.use((req, res, next) => {
  //   req.setHeader("Access-Control-Allow-Origin", "codepen.io");
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// middleware
app.use(express.json());
app.use('/api/auth', authRoute);
app.use('/api/hotel', hotelRoute);
app.use('/api/room', roomRoute);
app.use('/api/user', userRoute);
// error handling middleware
app.use((error, req, res, next) => {
  const status = error.status || 500;
  const message = error.message || 'something wrong in server side';
  const data = error.data || 'something wrong';
  res.status(status).json({
    success: false, message, data, stack: error.stack,
  });
});

// connection to mongoose
app.listen(8800, () => {
  connetdb();
  console.log('make server backend');
});
