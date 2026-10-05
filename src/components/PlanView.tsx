'use client';

import { useState } from 'react';
import { clampLicences, firstYearTotal, leadOffer, licenceLabel, selectedOffer } from '@/lib/catalog';
import { formatPrice } from '@/lib/money';
import type { Plan } from '@/lib/types';
import { Price } from './Price';
import { OfferPicker } from './OfferPicker';
import { LicenseStepper } from './LicenseStepper';
import { OrderSummary } from './OrderSummary';

export function PlanView({ plan }: { plan: Plan }) {
  const [sku, setSku] = useState(leadOffer(plan).sku);
  const [licences, setLicences] = useState(1);
  const [confirmation, setConfirmation] = useState<string | null>(null);
  const offer = selectedOffer(plan, sku);

  function chooseOffer(nextSku: string) {
    setSku(nextSku);
    setConfirmation(null);
  }

  function changeLicences(count: number) {
    setLicences(clampLicences(count));
    setConfirmation(null);
  }

  function confirm() {
    setConfirmation(`Selected ${licenceLabel(licences)} of ${plan.name} for ${formatPrice(firstYearTotal(offer, licences))}.`);
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_22rem]">
      <section aria-labelledby="plan-title" className="space-y-7">
        <header>
          <p className="text-sm uppercase tracking-wide text-stone-500">{plan.brand}</p>
          <h1 id="plan-title" className="mt-2 text-3xl font-semibold tracking-tight">{plan.name}</h1>
          <p className="mt-4 max-w-xl leading-7 text-stone-600">{plan.description}</p>
        </header>
        <div className="rounded-xl p-5" style={{ backgroundColor: plan.accent }}>
          <h2 className="font-medium">Included in your subscription</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {plan.features.map((feature) => <li key={feature}>✓ {feature}</li>)}
          </ul>
        </div>
        <OfferPicker offers={plan.offers} selected={offer.sku} onChange={chooseOffer} />
        <Price offer={offer} />
        <LicenseStepper value={licences} onChange={changeLicences} />
      </section>
      <OrderSummary name={plan.name} offer={offer} licences={licences} onConfirm={confirm} confirmation={confirmation} />
    </div>
  );
}
