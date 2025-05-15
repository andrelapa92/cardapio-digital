import { MenuItem } from '../models/MenuItem';
import { CreateMenuItemDTO } from '../dtos/CreateMenuItemDTO';
import { UpdateMenuItemDTO } from '../dtos/UpdateMenuItemDTO';

export class MenuRepository {
  async findAll(): Promise<MenuItem[]> {
    return MenuItem.findAll();
  }

  async findById(id: number): Promise<MenuItem | null> {
    return MenuItem.findByPk(id);
  }

  async create(data: CreateMenuItemDTO): Promise<MenuItem> {
    return MenuItem.create({
      name: data.name,
      price: data.price,
      description: data.description ?? null,
      category: data.category ?? null,
    });
  }

  async update(id: number, data: UpdateMenuItemDTO): Promise<MenuItem | null> {
    const item = await MenuItem.findByPk(id);
    if (!item) return null;

    await item.update({
      name: data.name ?? item.name,
      price: data.price ?? item.price,
      description:
        data.description !== undefined ? data.description : item.description,
      category:
        data.category !== undefined ? data.category : item.category,
    });

    return item;
  }

  async delete(id: number): Promise<void> {
    const item = await MenuItem.findByPk(id);
    if (item) {
      await item.destroy();
    }
  }
}
