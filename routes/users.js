import express from 'express';
import { getUser, getUsers, createUser, deleteUser, updateUser } from '../controllers/users.js';

const router = express.Router();


router.get('/', getUsers); // Get all users

router.get('/:id', getUser); // Get a single user by ID

router.post('/', createUser); // Create a new user

router.delete('/:id', deleteUser) // Delete a user by ID

router.patch('/:id', updateUser); // Update a user by ID

export default router;