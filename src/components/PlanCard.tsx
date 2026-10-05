import Link from 'next/link';
import { leadOffer, coverageLabel } from '@/lib/catalog';
import type { Plan } from '@/lib/types';
import { Price } from './Price';

export function PlanCard({ plan }: { plan: Plan }) {
  const offer = leadOffer(plan);
  return (
    <article aria-labelledby={`title-${plan.slug}`} className="flex h-full flex-col rounded-xl border border-stone-200 bg-white p-6">
      <div className="mb-5 flex items-center justify-between rounded-lg p-4" style={{ backgroundColor: plan.accent }}>
        <span className="text-sm font-medium">{plan.category}</span>
        <span aria-hidden="true" className="text-2xl">{plan.name.charAt(0)}</span>
      </div>
      <p className="text-xs uppercase tracking-wide text-stone-500">{plan.brand}</p>
      <h2 id={`title-${plan.slug}`} className="mt-1 text-xl font-semibold">{plan.name}</h2>
      <p className="mt-3 text-sm leading-6 text-stone-600">{plan.description}</p>
      <ul className="my-5 space-y-2 text-sm">
        {plan.features.map((feature) => <li key={feature}>✓ {feature}</li>)}
      </ul>
      <div className="mt-auto border-t border-stone-100 pt-5">
        <p className="mb-2 text-sm font-medium">{coverageLabel(offer.devices)}</p>
        <Price offer={offer} />
        <Link href={`/plans/${plan.slug}`} className="mt-5 block rounded-lg bg-stone-900 px-4 py-3 text-center text-sm font-medium text-white hover:bg-stone-700">
          Explore {plan.name}
        </Link>
      </div>
    </article>
  );
}
