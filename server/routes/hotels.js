/* eslint-disable max-len */
import express from 'express';
import Hotel from '../models/Hotel.js';
import { createError } from '../utils/error.js';

const router = express.Router();

// SELECT / GET ALL
router.get('/', async (req, res) => {
  try {
    const hotels = await Hotel.find();
    res.status(200).json({ message: 'Semua data berhasil di panggil', data: hotels });
  } catch (error) {
    res.status(500).json(error);
  }
});
// GET by id
router.get('/:id', async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json({ message: 'Data berhasil di panggil', data: hotel });
  } catch (error) {
    next(createError(404, 'Hotels not found'));
  }
});

// CREATE / POST
router.post('/', async (req, res) => {
  const newHotel = new Hotel(req.body);
  try {
    const saveHotel = await newHotel.save();
    res.status(200).json(saveHotel);
  } catch (error) {
    res.status(500).json(error);
  }
});
// UPDATE / PUT
router.put('/:id', async (req, res) => {
  try {
    const updateHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
    res.status(200).json(updateHotel);
  } catch (error) {
    res.status(500).json(error);
  }
});
// DELETE
router.delete('/:id', async (req, res) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Hotel has been deleted' });
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;
