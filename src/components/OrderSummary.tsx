import { coverageLabel, firstYearTotal, licenceLabel } from '@/lib/catalog';
import { formatPrice } from '@/lib/money';
import type { Offer } from '@/lib/types';

type Props = {
  name: string;
  offer: Offer;
  licences: number;
  onConfirm: () => void;
  confirmation: string | null;
};

export function OrderSummary({ name, offer, licences, onConfirm, confirmation }: Props) {
  const total = firstYearTotal(offer, licences);
  return (
    <section aria-labelledby="summary-title" className="self-start rounded-xl border border-stone-200 bg-stone-50 p-6">
      <h2 id="summary-title" className="text-lg font-semibold">Order summary</h2>
      <p className="mt-4 font-medium">{name}</p>
      <p className="mt-1 text-sm text-stone-600">{coverageLabel(offer.devices)} per licence · {licenceLabel(licences)}</p>
      <dl className="mt-6 space-y-4 border-t border-stone-200 pt-5">
        <div className="flex justify-between gap-4"><dt>Per licence</dt><dd>{formatPrice(offer.price)}</dd></div>
        <div className="flex justify-between gap-4"><dt>Licences</dt><dd>{licences}</dd></div>
        <div className="flex justify-between gap-4 text-lg font-semibold"><dt>Due today</dt><dd>{formatPrice(total)}</dd></div>
      </dl>
      <p className="mt-3 text-xs text-stone-500">USD, before tax. One year of coverage.</p>
      <button type="button" onClick={onConfirm} className="mt-6 w-full rounded-lg bg-stone-900 px-4 py-3 text-sm font-medium text-white hover:bg-stone-700">Confirm selection</button>
      <p role="status" className="mt-3 text-sm text-emerald-800">{confirmation}</p>
    </section>
  );
}
