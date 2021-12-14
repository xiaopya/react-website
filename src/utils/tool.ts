import { message } from 'antd';
import { Variable } from './variable';

export const storage = {
  set(key: string, value: any) {
    if (value) {
      window.localStorage.setItem(key, JSON.stringify(value));
    } else {
      storage.remove(key);
    }
  },
  get(key: string) {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  },
  remove(key: string) {
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
