import { useCallback, useEffect, useMemo, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { ICurrency } from '../types/currency';

interface IUseCurrencyHook {
  currencies: ICurrency[];
  isLoading: boolean;
  updateCurrencies: (updatedCurrencies: ICurrency[]) => void;
}

export const useCurrency = (): IUseCurrencyHook => {
  const [isLoading, setIsLoadning] = useState<boolean>(false);
  const [currencies, setCurrencies] = useState<ICurrency[]>([]);

  const getAllCurrencies = useCallback(async () => {
    try {
      setIsLoadning(true);
      const response: AxiosResponse<{ rates: Record<string, ICurrency> }> =
        await axios.get('https://api.coingecko.com/api/v3/exchange_rates');

      const formattedCurrencies: ICurrency[] = Object.entries(
        response.data.rates,
      ).map(([, currency]) => {
        return currency;
      });
      setCurrencies(formattedCurrencies);
      setIsLoadning(false);
    } catch (error) {
      setIsLoadning(false);
      console.error(error);
    }
  }, []);

  const updateCurrencies = useCallback((updatedCurrencies: ICurrency[]) => {
    setCurrencies(updatedCurrencies);
  }, []);

  useEffect(() => {
    getAllCurrencies();
  }, [getAllCurrencies]);

  return useMemo(() => {
    return { currencies, isLoading, updateCurrencies };
  }, [currencies, isLoading, updateCurrencies]);
};
