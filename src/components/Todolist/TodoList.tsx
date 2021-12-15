import React from 'react';
import Todo, { TodoModel } from './Todo';

export interface State {
  todos: { todos: TodoModel[]; status: string; filteredTodos: TodoModel[] };
}

interface Props {
  filteredTodos: TodoModel[];
}

const TodoList: React.FC<Props> = ({ filteredTodos }) => {
  const todos = filteredTodos;

  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((todo) => (
          <Todo
            todo={todo}
            key={todo.id}
            name={todo.name}
            id={todo.id}
            completed={todo.completed}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
