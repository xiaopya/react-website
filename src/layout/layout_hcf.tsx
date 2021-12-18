import { Layout, BackTop, Tooltip } from 'antd';
// import { Particle } from '@/components/Particle';
import { Headers } from '@/components/Hearder';
import { Myiconfont } from '@/utils/IconFont';
import rootReducer from '@/redux/rootReducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { MessageOnce } from '@/utils/tool';
import { useEffect } from 'react';
import { Variable } from '@/utils/variable';
import _ from 'lodash';
import { history } from 'umi';
import ErrorPage from '@/pages/Access_Error/404';
const { Content, Footer } = Layout;
import 'antd/dist/antd.css';
const store = createStore(rootReducer, composeWithDevTools());

interface IAppProps {
  children: object;
  routes: [
    {
      routes: string;
    },
  ];
}

export const LayoutHcf: React.FunctionComponent<IAppProps> = ({
  children,
  routes,
}) => {
  // 没有匹配到路由 跳到 404 界面
  function routesState() {
    const index = _.indexOf(
      _.map(routes[0]?.routes, 'path'),
      history.location.pathname,
    );
    if (index === -1) {
      history.push('/404');
    }
  }
  useEffect(() => {
    MessageOnce();
    routesState();
  }, []);

  return (
    <Provider store={store}>
      {history.location.pathname === '/404' ? (
        <ErrorPage />
      ) : (
        <Layout>
          <Headers />
          <Content>
            {/* <Particle /> */}
            <Layout>{children}</Layout>
          </Content>
          <BackTop>
            <Tooltip
              placement="topLeft"
              title={Variable.LAYOUT_HCF.title}
              color="cyan"
            >
              <span
                style={{
                  fontSize: '48px',
                }}
              >
                <Myiconfont type="icon-dajumao" />
              </span>
            </Tooltip>
          </BackTop>
          <Footer style={{ textAlign: 'center' }}>
            {Variable.LAYOUT_HCF.user_title}
          </Footer>
        </Layout>
      )}
    </Provider>
  );
};
