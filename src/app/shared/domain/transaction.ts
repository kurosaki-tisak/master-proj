import { Customer, Order, Payment } from '../domain';

export interface Transaction {
  id: Number;
  customer: Customer;
  order: Order[];
  payment: Payment;
}
