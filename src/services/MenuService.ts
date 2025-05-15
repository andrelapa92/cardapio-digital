import { MenuRepository } from '../repositories/MenuRepository';
import { MenuItem } from '../models/MenuItem';
import { CreateMenuItemDTO } from '../dtos/CreateMenuItemDTO';
import { UpdateMenuItemDTO } from '../dtos/UpdateMenuItemDTO';

export class MenuService {
  constructor(private repository: MenuRepository) {}

  async getAll() {
    return this.repository.findAll();
  }

  async getById(id: number) {
    return this.repository.findById(id);
  }

  async create(data: CreateMenuItemDTO) {
    // Você pode adicionar validações aqui
    return this.repository.create(data);
  }

  async update(id: number, data: UpdateMenuItemDTO): Promise<MenuItem | null> {
    const item = await this.repository.findById(id);
    if (!item) {
      return null;
    }

    // Faz merge dos dados antigos com os novos usando os campos do DTO
    await item.update({
      name: data.name ?? item.name,
      price: data.price ?? item.price,
      category: data.category ?? item.category,
      description: data.description ?? item.description,
    });

    return item;
  }

  async delete(id: number) {
    return this.repository.delete(id);
  }
}
