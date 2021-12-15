import { Layout, BackTop, Tooltip } from 'antd';
import { Particle } from '@/components/Particle';
import { Headers } from '@/components/Hearder';
import { Myiconfont } from '@/utils/IconFont';
const { Content, Footer } = Layout;
import 'antd/dist/antd.css';
import rootReducer from '@/redux/rootReducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools());
interface IAppProps {}

export const LayoutHcf: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <Provider store={store}>
      <Layout>
        <Headers />
        <Content>
          <Particle />
          <Layout>{props.children}</Layout>
        </Content>
        <BackTop>
          <Tooltip placement="topLeft" title="回到顶部" color="cyan">
            <span
              style={{
                fontSize: '48px',
              }}
            >
              <Myiconfont type="icon-dajumao" />
            </span>
          </Tooltip>
        </BackTop>
        <Footer style={{ textAlign: 'center' }}>小陈同学</Footer>
      </Layout>
    </Provider>
  );
};
