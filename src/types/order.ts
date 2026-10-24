export type Fulfilment = "collection" | "delivery";

export type DemoPaymentMethod = "collection-demo" | "momo-demo";

export type DemoOrderItem = {
  productId: string;
  name: string;
  quantity: number;
  unitPrice: number;
  lineTotal: number;
};

export type DemoOrder = {
  reference: string;
  customerName: string;
  phone: string;
  email: string;
  fulfilment: Fulfilment;
  address: string;
  date: string;
  time: string;
  notes: string;
  paymentMethod: DemoPaymentMethod;
  items: DemoOrderItem[];
  subtotal: number;
  deliveryFee: number;
  total: number;
  createdAt: string;
};
