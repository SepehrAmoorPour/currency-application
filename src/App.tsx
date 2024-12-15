import { ReactElement } from 'react';
import { CurrencyTable } from './components/CurrencyTable';

function App(): ReactElement {
  return (
    <>
      <div className="px-10 py-5">
        <h1 className="text-2xl">Currency application</h1>
        <CurrencyTable />
      </div>
    </>
  );
}

export default App;
