export interface Order {
  id: number;
  customerName: string;
  customerPhone: string;
  orderTime: string;
  tableNumber: number;
  status: string;
  items: { name: string; price: number }[];
  totalAmount: number;
}
