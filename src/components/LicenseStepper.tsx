import { MAX_LICENCES } from '@/lib/catalog';

type Props = { value: number; onChange: (value: number) => void };

export function LicenseStepper({ value, onChange }: Props) {
  return (
    <div>
      <p id="licence-label" className="font-medium">Number of licences</p>
      <div role="group" aria-labelledby="licence-label" className="mt-3 inline-flex items-center rounded-lg border border-stone-300">
        <button type="button" aria-label="Fewer licences" disabled={value <= 1} onClick={() => onChange(value - 1)} className="px-4 py-2 disabled:opacity-30">−</button>
        <span className="w-8 text-center tabular-nums" aria-live="polite">{value}</span>
        <button type="button" aria-label="More licences" disabled={value >= MAX_LICENCES} onClick={() => onChange(value + 1)} className="px-4 py-2 disabled:opacity-30">+</button>
      </div>
      <p className="mt-2 text-sm text-stone-600">Each licence has its own device allowance. Up to {MAX_LICENCES} licences per order.</p>
    </div>
  );
}
