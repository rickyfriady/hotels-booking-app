/* eslint-disable max-len */
import express from 'express';
// controller
import {
  getAllUsers, getByIdUser, createUser, updateUser, deleteUser,
} from '../controllers/user.js';

import { verifyAdmin, verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

// SELECT / GET ALL
router.get('/', verifyAdmin, getAllUsers);
// GET by id
router.get('/:id', verifyUser, getByIdUser);

// CREATE / POST
router.post('/', createUser);
// UPDATE / PUT
router.put('/:id', verifyUser, updateUser);
// DELETE
router.delete('/:id', verifyUser, deleteUser);

export default router;
