import { Product } from "./product";

interface OrderItem {
  product: Product;
  quantity: number;
  _id: string;
}

interface OrderAddress {
  _id: string;
  userId: string;
  fullName: string;
  phoneNumber: string;
  pincode: number;
  area: string;
  city: string;
  state: string;
  __v: number;
}

export interface Order {
  _id: string;
  userId: string;
  items: OrderItem[];
  amount: number;
  status: string;
  date: number;
  address: OrderAddress;
  __v: number;
}