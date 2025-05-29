import { Request, Response, RequestHandler } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';
import { UserDao } from '../dao/User';

export const getAllUsers: RequestHandler = async (req: Request, res: Response) => {
  try {
    const users = await UserDao.getAllUsers();
    res.json(users);
  } catch (error) {
    console.error('Error in getAllUsers:', error);
    res.status(500).json({ message: 'Failed to fetch users' });
  }
};

export const getUserById: RequestHandler = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await UserDao.getUserById(id);

    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    res.json(user);
  } catch (error) {
    console.error('Error in getUserById:', error);
    res.status(500).json({ message: 'Failed to fetch user' });
  }
};

export const createUser: RequestHandler = async (req: Request, res: Response) => {
  try {
    const { username, email, avatar_url } = req.body;
    const newUser = await UserDao.createUser(username, email, avatar_url);
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error in createUser:', error);
    res.status(500).json({ message: 'Failed to create user' });
  }
};

export const updateUser: RequestHandler = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { username, email, avatar_url } = req.body;

    const updatedUser = await UserDao.updateUser(id, username, email, avatar_url);

    if (!updatedUser) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    res.json(updatedUser);
  } catch (error) {
    console.error('Error in updateUser:', error);
    res.status(500).json({ message: 'Failed to update user' });
  }
};

export const deleteUser: RequestHandler = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await UserDao.deleteUser(id);
    res.status(204).send(); // No content on successful delete
  } catch (error) {
    console.error('Error in deleteUser:', error);
    res.status(500).json({ message: 'Failed to delete user' });
  }
};
