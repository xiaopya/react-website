import { RouteContext } from '@ant-design/pro-layout';
import { Headers } from '../Hearder';
const MultiTab = () => (
  <RouteContext.Consumer>
    {() => {
      return <Headers />;
    }}
  </RouteContext.Consumer>
);
export default MultiTab;
