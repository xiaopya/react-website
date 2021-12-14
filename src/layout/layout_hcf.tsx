import { Layout } from 'antd';
import MultiTab from '@/components/MultiTab';
import { Particle } from '@/components/Particle';
const { Header, Content, Footer } = Layout;

interface IAppProps {}

export const LayoutHcf: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <>
      <Layout>
        <MultiTab />
        <Content>
          <Layout>
            <Particle />
          </Layout>
        </Content>
        <Footer style={{ textAlign: 'center' }}>小陈同学</Footer>
      </Layout>
    </>
  );
};
