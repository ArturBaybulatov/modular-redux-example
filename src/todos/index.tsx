import styles from './index.module.scss';
import {useTodos, add, remove} from './state';

export default () => (
  <div>
    <ul>
      {useTodos().map(todo => (
        <li key={todo.id}>
          {todo.text}{' '}
          <button
            className={styles.cross}
            onClick={() => {
              remove(todo.id);
            }}
          >
            ×
          </button>
        </li>
      ))}
    </ul>

    <div>
      <button
        onClick={() => {
          add(`Todo ${Math.random()}`);
        }}
      >
        Add
      </button>
    </div>
  </div>
);
