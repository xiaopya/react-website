import * as React from 'react';
import { Carousel } from 'antd';

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

interface IAppProps {}

export const CarouselApp: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <Carousel autoplay>
      <div>sss</div>
      <div>sssss</div>
      <div>sddd</div>
      <div>sfsf</div>
    </Carousel>
  );
};
