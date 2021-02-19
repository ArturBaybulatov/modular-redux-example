import {lazy, Suspense} from 'react';

import {wait} from 'src/util';

const Counter = lazy(() => import('src/counter'));

const Todos = lazy(async () => {
  await wait(3);
  return import('src/todos');
});

export const App = () => (
  <>
    <Suspense fallback="Loading Counter…">
      <Counter />
    </Suspense>

    <Suspense fallback="Loading Todos…">
      <Todos />
    </Suspense>
  </>
);
