import axios from 'axios';
export const fetchMenuItems = async () => {
    const response = await axios.get('');
    return response.data.data.map(item => ({
        id: item.id,
        name: item.name,
        description: item.description,
        price: parseFloat(item.price),
        category: item.category,
        image_url: `http://localhost:3000${item.image_url}`,
    }));
};
