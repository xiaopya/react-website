import { TodoModel } from '@/components/Todolist/Todo';

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
  switch (action.type) {
    default:
      return state;
    case 'ADD_TODO':
      if (action.payload?.name !== '') {
        return { ...state, todos: [...state.todos, action.payload] };
      }
      return state;
    case 'DELETE_TODO':
      return { ...state, todos: action.payload };

    case 'CHANGE_CHECKED':
      //   const updatedTodos = state.todos.map((todo) =>
      //     todo.id === action.payload?.id ? { ...todo, completed: !todo.completed } : todo
      //   );
      //   console.log(updatedTodos);
      //   return { ...state, todos: updatedTodos };

      const updatedTodos = [...state.todos];
      const todo = updatedTodos.find((todo) => todo.id === action.payload?.id)!;
      todo.completed = !todo.completed;
      return { ...state, todos: updatedTodos };

    case 'UPDATE_STATUS':
      //   return { ...state, status: action.payload };
      if (action.payload === 'completed') {
        const filteredTodos = state.todos.filter((todo) => todo.completed);
        console.log(filteredTodos);

        return { ...state, filteredTodos: filteredTodos };
      }
      if (action.payload === 'uncompleted') {
        const filteredTodos = state.todos.filter((todo) => !todo.completed);
        console.log(filteredTodos);

        return { ...state, filteredTodos: filteredTodos };
      } else {
        console.log(state.todos);
        return { ...state, filteredTodos: state.todos };
      }

    case 'FILTER_TODOS':
  }
};

export default TodoReducer;
