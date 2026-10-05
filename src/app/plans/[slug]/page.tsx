import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PlanView } from '@/components/PlanView';
import { getPlan } from '@/data/storefront';

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const plan = await getPlan((await params).slug);
  return { title: plan ? `${plan.name} by ${plan.brand}` : 'Plan not found' };
}

export default async function PlanPage({ params }: Props) {
  const plan = await getPlan((await params).slug);
  if (!plan) notFound();
  return (
    <>
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-stone-500">
        <Link href="/" className="hover:underline">All plans</Link> / {plan.name}
      </nav>
      <PlanView plan={plan} />
    </>
  );
}
