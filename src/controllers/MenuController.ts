import { RequestHandler } from 'express';
import { MenuService } from '../services/MenuService';
import {
  respondWithError,
  respondWithSuccess,
  respondWithoutContent,
} from '../utils/response';
import { MESSAGES } from '../constants/messages';
import { AppError } from '../errors/AppError';

export class MenuController {
  constructor(private service: MenuService) {}

  getAll: RequestHandler = async (_req, res) => {
    const items = await this.service.getAll();
    respondWithSuccess(res, items);
  };

  getById: RequestHandler = async (req, res) => {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      respondWithError(res, 400, MESSAGES.INVALID_ID);
      return;
    }

    const item = await this.service.getById(id);
    if (!item) {
      throw new AppError(MESSAGES.ITEM_NOT_FOUND, 404);
    }

    respondWithSuccess(res, item);
  };

  create: RequestHandler = async (req, res) => {
    try {
      const item = await this.service.create(req.body);
      respondWithSuccess(res, item, 201);
    } catch (error) {
      console.error('Erro ao criar item do cardápio:', error);
      respondWithError(res, 500, MESSAGES.INTERNAL_SERVER_ERROR);
    }
  };

  update: RequestHandler = async (req, res) => {
    try {
      const id = Number(req.params.id);
      if (isNaN(id)) {
        respondWithError(res, 400, MESSAGES.INVALID_ID);
        return;
      }

      const item = await this.service.update(id, req.body);
      if (!item) {
        respondWithError(res, 404, MESSAGES.ITEM_NOT_FOUND);
        return;
      }

      respondWithSuccess(res, item);
    } catch (error) {
      console.error('Erro ao atualizar item do cardápio:', error);
      respondWithError(res, 500, MESSAGES.INTERNAL_SERVER_ERROR);
    }
  };

  delete: RequestHandler = async (req, res) => {
    try {
      const id = Number(req.params.id);
      if (isNaN(id)) {
        respondWithError(res, 400, MESSAGES.INVALID_ID);
        return;
      }

      await this.service.delete(id);
      respondWithoutContent(res);
    } catch (error) {
      console.error('Erro ao excluir item do cardápio:', error);
      respondWithError(res, 500, MESSAGES.INTERNAL_SERVER_ERROR);
    }
  };
}
