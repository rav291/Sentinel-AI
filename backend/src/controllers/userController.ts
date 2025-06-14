import { Request, Response, RequestHandler } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';
import { UserDao } from '../dao/User';
import { setRefreshTokenCookie } from '../utils/cookie';
import { generateAccessToken, generateRefreshToken } from '../utils/token';

export const loginUser: RequestHandler = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({ message: 'Email and password are required' });
      return;
    }

    const user = await UserDao.loginUser(email, password);

    const payload = { userId: user.id };
    const accessToken = generateAccessToken(payload);
    const refreshToken = generateRefreshToken(payload);

    setRefreshTokenCookie(res, refreshToken);

    res.status(200).json({
      message: 'Login successful',
      user,
      accessToken,
    });
  } catch (error: any) {
    console.error('Error in loginUser:', error);

    const status = error instanceof Error && 'statusCode' in error ? Number((error as any).statusCode) : 500;
    const message = error instanceof Error ? error.message : 'Internal server error';

    res.status(status).json({ message });
  }
};

export const createUser: RequestHandler = async (req: Request, res: Response) => {
  try {
    const { name, email, password, avatar_url } = req.body;

    if (!name || !email || !password) {
      res.status(400).json({ message: 'Name, email, and password are required' });
    }

    const newUser = await UserDao.createUser(name, email, password, avatar_url);

    // 2. Generate tokens
    const payload = { userId: newUser.id };
    const accessToken = generateAccessToken(payload); // Short-lived token
    const refreshToken = generateRefreshToken(payload); // Long-lived token (you may allow override in util)

    // 3. Set refresh token as HTTP-only cookie
    setRefreshTokenCookie(res, refreshToken);

    // 4. Return sanitized user and access token
    const { password: _, ...safeUser } = newUser;

    res.status(201).json({
      message: 'User created successfully',
      user: safeUser,
      accessToken,
    });
  } catch (error) {
    console.error('Error in createUser:', error);

    const status = error instanceof Error && 'statusCode' in error ? Number(error.statusCode) : 500;

    res.status(status).json({ message: error instanceof Error ? error.message : 'Internal server error' });
  }
};

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
