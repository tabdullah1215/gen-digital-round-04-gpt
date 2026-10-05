import type { Metadata } from 'next';
import { PlanCard } from '@/components/PlanCard';
import { getPlans } from '@/data/storefront';

export const metadata: Metadata = { title: 'Protection plans | Harbor Digital' };

export default async function HomePage() {
  const plans = await getPlans();
  return (
    <>
      <header className="mb-9 max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-widest text-stone-500">Security &amp; privacy</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">Find your everyday protection</h1>
        <p className="mt-4 leading-7 text-stone-600">Choose the coverage that suits your devices. Explore each plan to select your device allowance and number of licences.</p>
      </header>
      <div className="grid gap-6 md:grid-cols-2">
        {plans.map((plan) => <PlanCard key={plan.slug} plan={plan} />)}
      </div>
    </>
  );
}
