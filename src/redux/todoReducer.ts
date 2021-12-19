import { TodoModel } from '@/components/Todolist/Todo';
import { storage } from '@/utils/tool';
const initialState: {
  todos: TodoModel[];
  status: string;
  filteredTodos: TodoModel[];
} = {
  todos: [],
  status: 'all',
  filteredTodos: [],
};

type Action = {
  type: string;
  payload?: TodoModel | TodoModel[] | any;
};

const TodoReducer = (state = initialState, action: Action) => {
  console.log(state, action, 'action.....');
  // 数据存储到本地
  let valsState;
  if (!storage.get('state')) {
    valsState = { ...state, todos: [] };
    storage.set('state', valsState);
  } else {
    valsState = storage.get('state');
  }
  switch (action.type) {
    default:
      return valsState;
    case 'ADD_TODO':
      if (action.payload?.name !== '') {
        valsState = { ...state, todos: [...state.todos, action.payload] };
        storage.set('state', valsState);
        return valsState;
      }
      return valsState;
    case 'DELETE_TODO':
      valsState = { ...valsState, todos: action.payload };
      storage.set('state', valsState);
      return { ...valsState, todos: action.payload };

    case 'CHANGE_CHECKED':
      const updatedTodos = [...valsState.todos];
      const todo = updatedTodos.find((todo) => todo.id === action.payload?.id)!;
      todo.completed = !todo.completed;
      valsState = { ...valsState, todos: updatedTodos };
      storage.set('state', valsState);
      return valsState;

    case 'CLEAR_TODOS':
      valsState = { ...valsState, todos: [] };
      storage.set('state', valsState);
      return valsState;

    case 'UPDATE_STATUS':
      //   return { ...valsState, status: action.payload };
      if (action.payload === 'completed') {
        const filteredTodos = valsState.todos.filter(
          (todo: { completed: any }) => todo.completed,
        );
        console.log(filteredTodos);

        return { ...valsState, filteredTodos: filteredTodos };
      }
      if (action.payload === 'uncompleted') {
        const filteredTodos = valsState.todos.filter(
          (todo: { completed: any }) => !todo.completed,
        );
        console.log(filteredTodos);

        return { ...valsState, filteredTodos: filteredTodos };
      } else {
        console.log(valsState.todos);
        return { ...valsState, filteredTodos: valsState.todos };
      }

    case 'FILTER_TODOS':
  }
};

export default TodoReducer;
