import * as React from 'react';
import { Menu, Avatar } from 'antd';
import styles from './style.less';

interface IAppProps {}

export const Headers: React.FunctionComponent<IAppProps> = (props) => {
  const handleClick: (value: any) => void = (value) => {
    console.log(value, 'value header');
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.wrap_conatiner}>
        <Avatar size={46} src={require('@/images/logo.png')} />
        <div className={styles.width_block}>
          <Menu onClick={handleClick} mode="horizontal">
            <Menu.Item key="todolist">TODOLIST</Menu.Item>
          </Menu>
        </div>
      </div>
    </div>
  );
};
