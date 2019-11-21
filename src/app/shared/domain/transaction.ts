import { Customer, Order } from '../domain';

export interface Transaction {
  id: Number;
  customer: Customer;
  order: Order[];
}
