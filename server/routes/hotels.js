/* eslint-disable max-len */
import express from 'express';
// controller
import {
  getAllHotels, getByIdHotel, createHotel, updateHotel, deleteHotel,
} from '../controllers/hotel.js';

const router = express.Router();

// SELECT / GET ALL
router.get('/', getAllHotels);
// GET by id
router.get('/:id', getByIdHotel);

// CREATE / POST
router.post('/', createHotel);
// UPDATE / PUT
router.put('/:id', updateHotel);
// DELETE
router.delete('/:id', deleteHotel);

export default router;
