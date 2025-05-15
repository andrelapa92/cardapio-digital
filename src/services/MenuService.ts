import { MenuRepository } from '../repositories/MenuRepository';

interface CreateMenuItemDTO {
  name: string;
  description?: string;
  price: number;
  category?: string;
}

export class MenuService {
  constructor(private repository: MenuRepository) {}

  async getAll() {
    return this.repository.findAll();
  }

  async getById(id: number) {
    return this.repository.findById(id);
  }

  async create(data: CreateMenuItemDTO) {
    // Adicionar validações aqui
    return this.repository.create(data);
  }

  async update(id: number, data: CreateMenuItemDTO) {
    // Adicionar validações aqui
    return this.repository.update(id, data);
  }

}
