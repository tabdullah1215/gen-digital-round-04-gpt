/** Amount in integer cents, USD. */
export type Money = number;

export type Brand = 'Harbor Secure' | 'Cedar Privacy';

export type Offer = {
  sku: string;
  devices: number;
  price: Money;
};

export type Plan = {
  slug: string;
  brand: Brand;
  name: string;
  category: 'Security' | 'Privacy';
  description: string;
  features: string[];
  accent: string;
  offers: Offer[];
};

/** The commerce service uses decimal dollar strings, not storefront cents. */
export type CommerceOffer = {
  sku: string;
  devices: number;
  firstYear: string;
  renewal: string | null;
};

export type CommercePlan = {
  id: string;
  brand: Brand;
  name: string;
  category: Plan['category'];
  offers: CommerceOffer[];
};

export type PlanContent = {
  productId: string;
  slug: string;
  description: string;
  features: string[];
  accent: string;
};
