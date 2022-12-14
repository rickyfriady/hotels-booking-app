/* eslint-disable max-len */
import express from 'express';
// controller
import {
  getAllHotels, getByIdHotel, createHotel, updateHotel, deleteHotel, 
  countByCity, countByType
} from '../controllers/hotel.js';

import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

// SELECT / GET ALL
router.get('/', getAllHotels);
// GET by id
router.get('/find/:id', getByIdHotel);

// CREATE / POST
router.post('/', verifyAdmin, createHotel);
// UPDATE / PUT
router.put('/:id', verifyAdmin, updateHotel);
// DELETE
router.delete('/:id', verifyAdmin, deleteHotel);


router.get("/countByCity", countByCity);
router.get("/countByType", countByType);

export default router;
