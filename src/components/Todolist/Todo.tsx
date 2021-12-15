import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo, changeChecked } from '@/redux/todoActions';
import { Checkbox, message, Popconfirm } from 'antd';
import { Myiconfont } from '@/utils/IconFont';
interface Props {
  name: string;
  id: number;
  completed: boolean;
  todo: TodoModel;
}

export interface TodoModel {
  name: string;
  id: number;
  completed: boolean;
}

const Todo: React.FC<Props> = ({ id, completed, name }) => {
  const todos = useSelector(
    (state: { todos: { todos: TodoModel[] } }) => state.todos.todos,
  );
  const todo = useSelector((state) => todos.find((el) => el.id === id)!);

  const dispatch = useDispatch();

  const onChange = (value: { target: { checked: any } }) => {
    const updatedTodo: TodoModel = { ...todo };
    updatedTodo.completed = value.target.checked;
    dispatch(changeChecked(updatedTodo));
  };

  const confirm = () => {
    const newTodos = todos.filter((el) => id !== el.id);
    dispatch(deleteTodo(newTodos));
    message.success('删除成功');
  };
  console.log(todo, 'todo');
  return (
    <div className="todo">
      <Checkbox checked={todo?.completed} onChange={onChange} />
      <li className={completed ? 'todo-item completed' : 'todo-item'}>
        {name}
      </li>
      <Popconfirm
        placement="topLeft"
        title="确定要删除吗"
        onConfirm={confirm}
        okText="确定"
        cancelText="取消"
      >
        <Myiconfont type="icon-lajitong" />
      </Popconfirm>
    </div>
  );
};

export default Todo;
