import { Response } from 'express';

export const respondWithError = (res: Response, status: number, message: string): void => {
  res.status(status).json({ success: false, message });
};

export const respondWithSuccess = (res: Response, data: unknown, status = 200): void => {
  res.status(status).json({ success: true, data });
};

export const respondWithoutContent = (res: Response): void => {
  res.status(204).send();
};
