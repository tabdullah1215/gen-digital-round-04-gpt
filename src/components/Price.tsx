import { formatPrice } from '@/lib/money';
import type { Offer } from '@/lib/types';

type Props = { offer: Offer };

export function Price({ offer }: Props) {
  return (
    <div className="space-y-1">
      <p className="text-2xl font-semibold tracking-tight">{formatPrice(offer.price)}</p>
      <p className="text-sm text-stone-600">For one year, per licence</p>
    </div>
  );
}
