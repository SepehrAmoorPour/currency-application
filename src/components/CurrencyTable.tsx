import { ReactElement, useCallback, useState } from 'react';
import { useCurrency } from '../hooks/useCurrency';
import { ICurrency } from '../types/currency';
import editIcon from '../assets/editIcon.svg';

export const CurrencyTable = (): ReactElement => {
  const { currencies, isLoading, updateCurrencies } = useCurrency();
  const [editMode, setEditMode] = useState<string | null>(null);

  const onEdit = useCallback(
    (currencyName: string, newValue: string) => {
      const index: number = currencies.findIndex((currency: ICurrency) => {
        return currency.name === currencyName;
      });
      if (index !== undefined && !Number.isNaN(parseFloat(newValue))) {
        const updatedCurrencies = currencies;
        updatedCurrencies[index] = {
          ...currencies[index],
          value: parseFloat(newValue),
        };
        updateCurrencies(updatedCurrencies);
      }
      setEditMode(null);
    },
    [currencies, updateCurrencies],
  );

  return (
    <>
      {isLoading ? (
        <>Loading currencies...</>
      ) : (
        <div className="border rounded-lg overflow-hidden">
          <table className="table table-fixed w-full border">
            <thead className="bg-gray-200">
              <tr className="text-left">
                <th className="px-2 py-3">Name</th>
                <th className="px-2 py-3">Unit</th>
                <th className="px-2 py-3">Value</th>
                <th className="px-2 py-3">Type</th>
              </tr>
            </thead>
            <tbody>
              {currencies.map((currency: ICurrency) => (
                <tr key={currency.name}>
                  <td className="px-2 py-3 border">{currency.name}</td>
                  <td className="px-2 py-3 border">{currency.unit}</td>
                  <td
                    className="px-2 py-3 border cursor-pointer"
                    onClick={() => setEditMode(currency.name)}
                  >
                    {editMode === currency.name ? (
                      <input
                        type="number"
                        placeholder="Enter new value"
                        className="border px-2 py-1 w-full"
                        autoFocus
                        onBlur={(event) =>
                          onEdit(currency.name, event.target.value)
                        }
                        onKeyDown={(event) =>
                          event.key === 'Enter' &&
                          onEdit(currency.name, event.currentTarget.value)
                        }
                        data-testid={`currency-input-${currency.name}`}
                      />
                    ) : (
                      <div className="flex gap-x-3">
                        <img src={editIcon} className="w-5" />
                        <span data-testid={`currency-value-${currency.name}`}>
                          {currency.value}
                        </span>
                      </div>
                    )}
                  </td>
                  <td className="px-2 py-3 border">{currency.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};
