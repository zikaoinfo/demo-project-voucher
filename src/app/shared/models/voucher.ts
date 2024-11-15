export interface Voucher {
  id: number;
  voucher_code: string;
  price: number;
  value: number;
  is_active: boolean;
  client_id: number;
  image: string
}
