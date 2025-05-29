import axios from 'axios'
import type { MenuItem } from '@/models/MenuItem'

export const fetchMenuItems = async (): Promise<MenuItem[]> => {
  const response = await axios.get<{ success: boolean; data: any[] }>('http://localhost:3000/api/menu')

  console.log(response.data.data);
  return response.data.data.map(item => ({
    id: item.id,
    name: item.name,
    description: item.description,
    price: parseFloat(item.price),
    category: item.category,
    image_url: `http://localhost:3000${item.image_url}`,
  }))
}
