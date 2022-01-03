import * as React from 'react';
import styles from './style.less';
import { Myiconfont } from '@/utils/IconFont';

interface IdirectionProps {}

const direction: React.FunctionComponent<IdirectionProps> = (props) => {
  return (
    <div className={styles.footer_btn}>
      <div className={styles.animate_bounce_down}>
        <Myiconfont type="icon-arrow-down" />
      </div>
    </div>
  );
};

export default direction;
