import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { commercePlans, planContent } from '@/data/seed';
import { toPlan } from '@/data/storefront';
import { PlanView } from './PlanView';

function setup(index = 0) {
  render(<PlanView plan={toPlan(commercePlans[index], planContent[index])} />);
  return { user: userEvent.setup(), summary: screen.getByRole('region', { name: 'Order summary' }) };
}

function amount(summary: HTMLElement, label: string) {
  return within(summary).getByText(label).nextElementSibling?.textContent;
}

describe('plan selection', () => {
  it('starts with the lead offer and one licence', () => {
    const { summary } = setup();
    expect(screen.getByRole('radio', { name: '3 devices' })).toBeChecked();
    expect(amount(summary, 'Due today')).toBe('$29.99');
    expect(screen.getByRole('button', { name: 'Fewer licences' })).toBeDisabled();
  });

  it('changes coverage and updates the order price', async () => {
    const { user, summary } = setup();
    await user.click(screen.getByRole('radio', { name: '5 devices' }));
    expect(amount(summary, 'Due today')).toBe('$39.99');
    expect(screen.getByRole('radio', { name: '5 devices' })).toBeChecked();
  });

  it('multiplies licences and retains the count when coverage changes', async () => {
    const { user, summary } = setup();
    await user.click(screen.getByRole('button', { name: 'More licences' }));
    expect(amount(summary, 'Due today')).toBe('$59.98');
    await user.click(screen.getByRole('radio', { name: '1 device' }));
    expect(amount(summary, 'Due today')).toBe('$39.98');
  });

  it('stops at five licences and can decrease again', async () => {
    const { user, summary } = setup();
    const more = screen.getByRole('button', { name: 'More licences' });
    for (let i = 0; i < 6; i++) await user.click(more);
    expect(more).toBeDisabled();
    expect(amount(summary, 'Due today')).toBe('$149.95');
    await user.click(screen.getByRole('button', { name: 'Fewer licences' }));
    expect(amount(summary, 'Due today')).toBe('$119.96');
  });

  it('confirms only the amount due today and clears stale confirmation on changes', async () => {
    const { user } = setup();
    await user.click(screen.getByRole('button', { name: 'Confirm selection' }));
    expect(screen.getByRole('status')).toHaveTextContent('Selected 1 licence of Everyday Shield for $29.99.');
    await user.click(screen.getByRole('radio', { name: '5 devices' }));
    expect(screen.getByRole('status')).toBeEmptyDOMElement();
    await user.click(screen.getByRole('button', { name: 'Confirm selection' }));
    await user.click(screen.getByRole('button', { name: 'More licences' }));
    expect(screen.getByRole('status')).toBeEmptyDOMElement();
  });

  it('works for plans with two coverage choices', async () => {
    const { user, summary } = setup(1);
    await user.click(screen.getByRole('radio', { name: '10 devices' }));
    expect(amount(summary, 'Due today')).toBe('$69.99');
  });
});
