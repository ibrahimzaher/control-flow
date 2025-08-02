export interface IProduct {
  id: string;
  title: string;
  description: string;
  imageCover: string;
  price: number;
  quantity: number;
  images: string[];
  onSale: boolean;
}
