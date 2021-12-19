import React, { useState, useEffect } from 'react';
import './style.less';
import TodoList, { State } from '@/components/Todolist/TodoList';
import Form from '@/components/Todolist/Form';
import { useSelector } from 'react-redux';
import { TodoModel } from '@/components/Todolist/Todo';
import { Particle } from '@/components/Particle';

function App() {
  const todos = useSelector((state: State) => state?.todos?.todos);
  const [status, setStatus] = useState<string>('all');
  const [filteredTodos, setFilteredTodos] = useState<TodoModel[]>([]);
  useEffect(() => {
    //
    const filterHandler = () => {
      switch (status) {
        case 'completed':
          setFilteredTodos(todos.filter((todo) => todo.completed));
          break;
        case 'uncompleted':
          setFilteredTodos(todos.filter((todo) => !todo.completed));
          break;
        default:
          setFilteredTodos(todos);
      }
    };

    filterHandler();
    console.log(status);
  }, [status, todos]);

  return (
    <div className="todolist_app">
      <Particle />
      <header>
        <h1>一个简单的todolist 你可以简单的记录你的一些东西🎉</h1>
      </header>
      <Form status={status} setStatus={setStatus} />
      {/* todolist 数据展示 */}
      <TodoList filteredTodos={filteredTodos} />
    </div>
  );
}

export default App;
