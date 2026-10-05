import type { Offer, Plan } from './types';

export const MAX_LICENCES = 5;

/** Commerce order is the merchandising order, including the lead offer. */
export function leadOffer(plan: Plan): Offer {
  return plan.offers[0];
}

/** Unknown selections resolve to the offer shown on the catalogue card. */
export function selectedOffer(plan: Plan, sku: string): Offer {
  return plan.offers.find((offer) => offer.sku === sku) ?? leadOffer(plan);
}

export function coverageLabel(devices: number): string {
  return `${devices} ${devices === 1 ? 'device' : 'devices'}`;
}

export function licenceLabel(count: number): string {
  return `${count} ${count === 1 ? 'licence' : 'licences'}`;
}

export function clampLicences(count: number): number {
  return Math.max(1, Math.min(MAX_LICENCES, Math.trunc(count)));
}

export function firstYearTotal(offer: Offer, licences: number): number {
  return offer.price * licences;
}
