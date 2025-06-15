import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET!;
const REFRESH_SECRET = process.env.REFRESH_SECRET!;

const ACCESS_TOKEN_EXPIRES_IN = '60m';
const REFRESH_TOKEN_EXPIRES_IN = '7d';

export interface JwtPayload {
  userId: number;
}

export const generateAccessToken = (payload: JwtPayload) =>
  jwt.sign(payload, JWT_SECRET, { expiresIn: ACCESS_TOKEN_EXPIRES_IN });

export const generateRefreshToken = (payload: JwtPayload) =>
  jwt.sign(payload, REFRESH_SECRET, { expiresIn: REFRESH_TOKEN_EXPIRES_IN });

export const verifyAccessToken = (token: string) =>
  jwt.verify(token, JWT_SECRET) as JwtPayload;

export const verifyRefreshToken = (token: string) =>
  jwt.verify(token, REFRESH_SECRET) as JwtPayload;
