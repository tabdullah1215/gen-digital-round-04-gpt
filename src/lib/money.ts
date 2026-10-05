import type { Money } from './types';

const usd = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });

/** Converts the commerce service's non-negative decimal amount into cents. */
export function toCents(amount: string): Money {
  if (!/^\d+\.\d{2}$/.test(amount)) {
    throw new Error(`Invalid commerce amount: ${amount}`);
  }
  const [dollars, cents] = amount.split('.');
  const value = Number(dollars) * 100 + Number(cents);
  if (!Number.isSafeInteger(value)) throw new Error('Commerce amount is too large');
  return value;
}

export function formatPrice(amount: Money): string {
  return usd.format(amount / 100);
}
