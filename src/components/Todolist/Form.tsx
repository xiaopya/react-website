import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Tag, message } from 'antd';
import { AddTodo } from '@/redux/todoActions';
import { Myiconfont } from '@/utils/IconFont';

interface Props {
  status: string;
  setStatus: any;
}

const Form: React.FC<Props> = ({ setStatus }) => {
  const obj = [
    {
      id: 1001,
      value: 'all',
      title: '全部',
      color: '#2db7f5',
    },
    {
      id: 1002,
      value: 'completed',
      title: '完成',
      color: '#87d068',
    },
    {
      id: 1003,
      value: 'uncompleted',
      title: '代办',
      color: '#108ee9',
    },
  ];

  const [text, setText] = useState('');

  const dispatch = useDispatch();

  const handleTodoName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const addTodo = (e: React.FormEvent) => {
    if (!text) {
      message.info('请添加数据哦');
    }
    e.preventDefault();
    const todo = {
      name: text,
      completed: false,
      id: Math.random() * 1000,
    };
    dispatch(AddTodo(todo));
    setText('');
  };

  const handleFilterChange = (v: { id: number; value: string }) => () => {
    setStatus(v.value);
  };

  return (
    <form onSubmit={addTodo}>
      <div className="input__container">
        <input
          type="text"
          className="todo-input"
          value={text}
          placeholder="添加你需要的代办事项吧..."
          onChange={handleTodoName}
        />
        <button className="todo-button" type="submit">
          <Myiconfont type="icon-tianjia" />
        </button>
      </div>
      <div className="filter__container">
        {obj?.map((v) => (
          <Tag
            style={{
              cursor: 'pointer',
            }}
            key={v.id}
            color={v.color}
            onClick={handleFilterChange(v)}
          >
            {v.title}
          </Tag>
        ))}
      </div>
    </form>
  );
};

export default Form;
