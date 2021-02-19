import {createReduxModule} from 'hooks-for-redux';

export const [useCounter, {increment, add, reset}] = createReduxModule('counter', 0, {
  increment: num => num + 1,
  add: (num, amount) => num + amount,
  reset: () => 0,
});
