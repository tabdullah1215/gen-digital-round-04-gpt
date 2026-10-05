import { coverageLabel } from '@/lib/catalog';
import type { Offer } from '@/lib/types';

type Props = { offers: Offer[]; selected: string; onChange: (sku: string) => void };

export function OfferPicker({ offers, selected, onChange }: Props) {
  return (
    <fieldset>
      <legend className="font-medium">Device coverage per licence</legend>
      <div className="mt-3 flex flex-wrap gap-3">
        {offers.map((offer) => (
          <label key={offer.sku} className="flex cursor-pointer items-center gap-2 rounded-lg border border-stone-300 px-4 py-3 has-checked:border-stone-900 has-checked:bg-stone-100">
            <input type="radio" name="coverage" value={offer.sku} checked={selected === offer.sku} onChange={() => onChange(offer.sku)} />
            {coverageLabel(offer.devices)}
          </label>
        ))}
      </div>
    </fieldset>
  );
}
