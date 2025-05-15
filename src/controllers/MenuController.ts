import { Request, Response } from 'express';
import { MenuService } from '../services/MenuService';
import { RequestHandler } from 'express-serve-static-core';

export class MenuController {
  constructor(private service: MenuService) {}

  getAll = async (req: Request, res: Response) => {
    const items = await this.service.getAll();
    res.json(items);
  };

  getById: RequestHandler = async (req, res) => {
    const id = Number(req.params.id);
  
    if (isNaN(id)) {
      res.status(400).json({ error: 'ID inválido' });
      return;
    }
  
    const item = await this.service.getById(id);
  
    if (!item) {
      res.status(404).json({ error: 'Item não encontrado' });
      return;
    }
  
    res.json(item);
  };
  
  

  create = async (req: Request, res: Response) => {
    try {
      const item = await this.service.create(req.body);
      res.status(201).json(item);
    } catch (error) {
      console.error('Erro ao criar item do cardápio:', error);
      res.status(500).json({ error: 'Erro ao criar item' });
    }
  };

  update = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
  
      if (isNaN(id)) {
        return res.status(400).json({ error: 'ID inválido' });
      }
  
      const item = await this.service.update(id, req.body);
  
      if (!item) {
        return res.status(404).json({ error: 'Item não encontrado' });
      }
  
      res.json(item);
    } catch (error) {
      console.error('Erro ao atualizar item do cardápio:', error);
      res.status(500).json({ error: 'Erro ao atualizar item' });
    }
  };
  
}
