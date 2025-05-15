import { Request, Response, NextFunction } from 'express';
import { AppError } from './AppError';
import { respondWithError } from '../utils/response';
import { MESSAGES } from '../constants/messages';

export const errorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
): void => {
  if (err instanceof AppError) {
    // Erro tratado (esperado)
    respondWithError(res, err.statusCode, err.message);
    return;
  }

  // Erro não tratado (inesperado)
  console.error('Erro inesperado:', err);
  respondWithError(res, 500, MESSAGES.INTERNAL_SERVER_ERROR);
};
