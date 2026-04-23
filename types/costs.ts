export interface CostItem {
  id: string;
  label: string;
  amount: string;
  description?: string;
  perMonth?: boolean;
}

export interface SocialDiscount {
  label: string;
  description: string;
}
