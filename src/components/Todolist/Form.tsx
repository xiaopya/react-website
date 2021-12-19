import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Tag, message, Popconfirm } from 'antd';
import { AddTodo, clearTodos } from '@/redux/todoActions';
import { Myiconfont } from '@/utils/IconFont';
import { storage } from '@/utils/tool';

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
  const [select, setSelect] = useState('未选择');

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

  const handleFilterChange =
    (v: { title: React.SetStateAction<string>; id: number; value: string }) =>
    () => {
      // 展现出 当前所选的 是哪一项
      setSelect(v.title);
      setStatus(v.value);
    };

  //清空 所有数据
  const confirm = () => {
    if (storage.get('state')?.todos?.length !== 0) {
      dispatch(clearTodos('clear'));
      message.success('删除成功');
    } else {
      message.error('未曾有数据,请您不要做频繁的删除');
    }
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
      <div
        className="filter__container"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div>
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
          <Tag>当前选中：{select}</Tag>
        </div>
        <Popconfirm
          placement="topLeft"
          title="确定要删除吗"
          onConfirm={confirm}
          okText="确定"
          cancelText="取消"
        >
          <Tag>清空</Tag>
        </Popconfirm>
      </div>
    </form>
  );
};

export default Form;
function state(state: any): any {
  throw new Error('Function not implemented.');
}
