import { render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { commercePlans, planContent } from '@/data/seed';
import { toPlan } from '@/data/storefront';
import { PlanCard } from './PlanCard';
import { Price } from './Price';

describe('price and catalogue cards', () => {
  it('shows a formatted per-licence yearly price', () => {
    render(<Price offer={{ sku: 'TEST', devices: 3, price: 2999 }} />);
    expect(screen.getByText('$29.99')).toBeInTheDocument();
    expect(screen.getByText('For one year, per licence')).toBeInTheDocument();
  });

  it('uses the same lead offer for the card coverage and price', () => {
    render(<PlanCard plan={toPlan(commercePlans[0], planContent[0])} />);
    const card = within(screen.getByRole('article', { name: 'Everyday Shield' }));
    expect(card.getByText('3 devices')).toBeInTheDocument();
    expect(card.getByText('$29.99')).toBeInTheDocument();
    expect(card.getByRole('link', { name: 'Explore Everyday Shield' })).toHaveAttribute('href', '/plans/everyday-shield');
  });

  it('renders a second brand using the same card', () => {
    render(<PlanCard plan={toPlan(commercePlans[2], planContent[2])} />);
    expect(screen.getByText('Cedar Privacy')).toBeInTheDocument();
    expect(screen.getByText('$34.50')).toBeInTheDocument();
  });
});
