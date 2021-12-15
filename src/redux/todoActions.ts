import { TodoModel } from '@/components/Todolist/Todo';

export const AddTodo = (todo: TodoModel) => {
  return {
    type: 'ADD_TODO',
    payload: todo,
  };
};

export const deleteTodo = (filtredTodos: TodoModel[]) => {
  return {
    type: 'DELETE_TODO',
    payload: filtredTodos,
  };
};

export const changeChecked = (updatedTodo: TodoModel) => {
  return {
    type: 'CHANGE_CHECKED',
    payload: updatedTodo,
  };
};

export const updateStatus = (status: string) => {
  return {
    type: 'UPDATE_STATUS',
    payload: status,
  };
};

export const filterTodos = (status: string) => {
  return {
    type: 'FILTER_TODOS',
    payload: status,
  };
};
