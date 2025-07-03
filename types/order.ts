import { Address } from "./address";
import { Product } from "./product";

interface OrderItem {
  product: Product;
  quantity: number;
  _id: string;
}

export interface Order {
  _id: string;
  userId: string;
  items: OrderItem[];
  amount: number;
  status: string;
  date: number;
  address: Address;
  __v: number;
}