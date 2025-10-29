import { ref, onMounted } from 'vue';
import { fetchMenuItems } from '@/services/menuService';
export const useMenuController = () => {
    const menuItems = ref([]);
    const loadMenuItems = async () => {
        try {
            menuItems.value = await fetchMenuItems();
        }
        catch (error) {
            console.error('Erro ao buscar itens do menu:', error);
        }
    };
    onMounted(loadMenuItems);
    return {
        menuItems,
    };
};
