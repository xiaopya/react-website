import * as React from 'react';
import Markdown from '@/components/Markdown';
import request from '@/utils/request';
import styles from './style.less';

interface IAppProps {}

const Markdown_text: React.FunctionComponent<IAppProps> = (props) => {
  async function fetchData() {
    const data = await request.get('/api/list/one');
    console.log(data);
  }
  fetchData();

  return (
    <div className={styles.markdown_wrap}>
      <Markdown />
    </div>
  );
};

export default Markdown_text;
