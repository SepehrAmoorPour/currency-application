import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { CurrencyTable } from './CurrencyTable';
import { testData } from '../mockData';

describe('CurrencyTable Component', () => {
  it('renders currencies', () => {
    render(<CurrencyTable />);
    expect(screen.findByText(testData.rates['btc'].name)).toBeTruthy();
  });

  it('can change value of a currency', async () => {
    render(<CurrencyTable />);
    userEvent.click(
      await screen.findByTestId(`currency-value-${testData.rates['btc'].name}`),
    );
    const newValue = '13.37';
    await userEvent.type(
      await screen.findByTestId(`currency-input-${testData.rates['btc'].name}`),
      `${newValue}{enter}`,
    );
    expect(
      screen.getByTestId(`currency-value-${testData.rates['btc'].name}`),
    ).toContainHTML(newValue);
  });
});
