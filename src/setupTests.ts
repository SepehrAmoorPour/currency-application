import { afterAll, afterEach, beforeAll, expect } from 'vitest';
import { cleanup } from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers';
import { setupServer } from 'msw/node';
import { HttpResponse, http } from 'msw';
import { testData } from './mockData';

expect.extend(matchers);

export const restHandlers = [
  http.get('https://api.coingecko.com/api/v3/exchange_rates', () => {
    return HttpResponse.json(testData);
  }),
];

const server = setupServer(...restHandlers);

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));

afterAll(() => server.close());

afterEach(() => {
  server.resetHandlers();
  cleanup();
});
