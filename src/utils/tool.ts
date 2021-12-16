import { message } from 'antd';
import { Variable } from './variable';

export const storage: {
  set(key: string, value: any): void;
  get(key: string): any;
  remove(key: string): void;
  clear(): void;
} = {
  set(key, value) {
    if (value) {
      window.localStorage.setItem(key, JSON.stringify(value));
    } else {
      storage.remove(key);
    }
  },
  get(key) {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  },
  remove(key) {
    window.localStorage.removeItem(key);
  },
  clear() {
    window.localStorage.clear();
  },
};

/**
 *  页面第一次进入 弹出一个 欢迎进去的 提示框
 */
export const MessageOnce: () => void = () => {
  if (storage.get('msg') === null) {
    storage.set('msg', 'message_once');
    message.info({
      content: Variable.TITLE_MESSAGE,
      className: 'custom-class',
      icon: '🎉',
      style: {
        marginTop: '10vh',
      },
    });
  }
};
