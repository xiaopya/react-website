import type { Settings as LayoutSettings } from '@ant-design/pro-layout';
import { PageLoading } from '@ant-design/pro-layout';
import { history } from 'umi';

/** 获取用户信息比较慢的时候会展示一个 loading */
export const initialStateConfig = {
  loading: <PageLoading />,
};

/**
 * @see  https://umijs.org/zh-CN/plugins/plugin-initial-state
 * */
export async function getInitialState() {
  const fetchUserInfo = async () => {
    try {
      return 'msg.data';
    } catch (error) {}
    return undefined;
  };
  // 如果是登录页面，不执行
  return {
    fetchUserInfo,
    settings: {},
  };
}
