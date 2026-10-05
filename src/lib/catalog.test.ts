import { describe, expect, it } from 'vitest';
import { commercePlans, planContent } from '@/data/seed';
import { toPlan } from '@/data/storefront';
import { clampLicences, firstYearTotal, leadOffer, selectedOffer } from './catalog';
import { formatPrice, toCents } from './money';

const plan = toPlan(commercePlans[0], planContent[0]);

describe('commerce mapping and money', () => {
  it('joins commerce and editorial content without exposing the feed shape', () => {
    expect(plan.name).toBe('Everyday Shield');
    expect(plan.slug).toBe('everyday-shield');
    expect(plan.offers[0]).toMatchObject({ sku: 'HS-ES-3', devices: 3, price: 2999 });
    expect(plan.features).toEqual(planContent[0].features);
    expect(plan.features).not.toBe(planContent[0].features);
  });

  it('rejects a mismatched join and a published plan with no offers', () => {
    expect(() => toPlan(commercePlans[0], planContent[1])).toThrow('Mismatched');
    expect(() => toPlan({ ...commercePlans[0], offers: [] }, planContent[0])).toThrow('needs an offer');
  });

  it('converts decimal amounts and formats cents without rounding dollars first', () => {
    expect(toCents('29.99')).toBe(2999);
    expect(toCents('0.00')).toBe(0);
    expect(formatPrice(3450)).toBe('$34.50');
  });

  it('rejects malformed and unsafe commerce amounts', () => {
    for (const value of ['29.9', 'hello', '-1.00', '9007199254740992.00']) {
      expect(() => toCents(value)).toThrow();
    }
  });
});

describe('offer selection and totals', () => {
  it('keeps the merchandised lead offer instead of finding the cheapest', () => {
    expect(leadOffer(plan).sku).toBe('HS-ES-3');
    expect(selectedOffer(plan, 'HS-ES-1').price).toBe(1999);
    expect(selectedOffer(plan, 'missing')).toBe(leadOffer(plan));
  });

  it('clamps licence counts to one through five', () => {
    expect([0, 2, 9].map(clampLicences)).toEqual([1, 2, 5]);
  });

  it('multiplies the selected per-licence price, not device coverage', () => {
    expect(firstYearTotal(leadOffer(plan), 2)).toBe(5998);
    expect(firstYearTotal(selectedOffer(plan, 'HS-ES-5'), 3)).toBe(11997);
  });
});
