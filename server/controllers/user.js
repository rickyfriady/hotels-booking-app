/* eslint-disable max-len */
/* eslint-disable import/no-import-module-exports */
import User from '../models/User.js';

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json({ message: 'Semua data berhasil di panggil', data: users });
  } catch (error) {
    next(error);
  }
};

export const getByIdUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json({ message: 'Data berhasil di panggil', data: user });
  } catch (error) {
    next(error);
  }
};

export const createUser = async (req, res, next) => {
  const newUser = new User(req.body);
  try {
    const saveUser = await newUser.save();
    res.status(200).json({ message: 'Data berhasil di Simpan', data: saveUser });
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (req, res, next) => {
  try {
    const DataUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
    res.status(200).json({ message: 'Data berhasil di Update', data: DataUser });
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'User has been deleted' });
  } catch (error) {
    next(error);
  }
};
