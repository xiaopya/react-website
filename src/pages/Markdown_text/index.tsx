import * as React from 'react';
import Markdown from '@/components/Markdown';
import styles from './style.less';

interface IAppProps {}

const Markdown_text: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <div className={styles.markdown_wrap}>
      <Markdown />
    </div>
  );
};

export default Markdown_text;
