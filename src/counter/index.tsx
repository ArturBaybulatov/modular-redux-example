import {useCounter, increment, add, reset} from 'src/counter/state';

export default () => (
  <div>
    Count: {useCounter()}{' '}
    <button type="button" onClick={increment}>
      Increment
    </button>{' '}
    <button type="button" onClick={() => add(10)}>
      Add 10
    </button>{' '}
    <button type="button" onClick={reset}>
      Reset
    </button>
  </div>
);
