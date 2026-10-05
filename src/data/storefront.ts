import { cache } from 'react';
import { toCents } from '@/lib/money';
import type { CommercePlan, Plan, PlanContent } from '@/lib/types';
import { commercePlans, planContent } from './seed';

/** Normalizes the commerce/CMS join into the model used by every storefront view. */
export function toPlan(commerce: CommercePlan, content: PlanContent): Plan {
  if (commerce.id !== content.productId) throw new Error('Mismatched product content');
  if (commerce.offers.length === 0) throw new Error('A published plan needs an offer');
  return {
    slug: content.slug,
    name: commerce.name,
    brand: commerce.brand,
    category: commerce.category,
    description: content.description,
    features: [...content.features],
    accent: content.accent,
    offers: commerce.offers.map((offer) => ({
      sku: offer.sku,
      devices: offer.devices,
      price: toCents(offer.firstYear),
    })),
  };
}

async function readCatalogue(): Promise<Plan[]> {
  await new Promise((resolve) => setTimeout(resolve, 60));
  return commercePlans.flatMap((commerce) => {
    const content = planContent.find((entry) => entry.productId === commerce.id);
    return content ? [toPlan(commerce, content)] : [];
  });
}

export const getPlans = cache(readCatalogue);

export async function getPlan(slug: string): Promise<Plan | undefined> {
  return (await getPlans()).find((plan) => plan.slug === slug);
}
