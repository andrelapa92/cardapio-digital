export interface CreateMenuItemDTO {
  name: string;
  description?: string | null;
  price: number;
  category?: string | null;
}