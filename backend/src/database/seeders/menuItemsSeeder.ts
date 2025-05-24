import { sequelize } from '../../config/database';
import { MenuItem } from '../../models/MenuItem';
import { CreationAttributes } from 'sequelize';

async function seedMenuItems() {
  try {
    await sequelize.sync();

    const items: CreationAttributes<MenuItem>[] = [
      {
        name: 'Hambúrguer Clássico',
        description: 'Pão, carne, queijo e alface',
        price: 25.90,
        category: 'Lanches',
      },
      {
        name: 'Pizza Margherita',
        description: 'Molho de tomate, mussarela e manjericão',
        price: 39.90,
        category: 'Pizzas',
      },
      {
        name: 'Suco de Laranja',
        description: 'Natural, sem açúcar',
        price: 7.00,
        category: 'Bebidas',
      },
      {
        name: 'Salada Caesar',
        description: 'Alface, frango grelhado, parmesão e croutons',
        price: 18.50,
        category: 'Saladas',
      },
    ];

    await MenuItem.bulkCreate(items);
    console.log('Pratos inseridos com sucesso!');
    process.exit(0);
  } catch (error) {
    console.error('Erro ao executar seed:', error);
    process.exit(1);
  }
}

seedMenuItems();
