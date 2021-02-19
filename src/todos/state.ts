import {createReduxModule} from 'hooks-for-redux';
import _ from 'lodash';

type Todo = {
  id: string;
  text: string;
};

const initialState: Todo[] = [];

export const [useTodos, {add, remove}] = createReduxModule('todos', initialState, {
  add: (todos, text: string) => [...todos, {id: _.uniqueId(), text}],
  remove: (todos, id: string) => todos.filter(x => x.id !== id),
});
