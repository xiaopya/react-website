import React, { Component } from 'react';
import Banner_Parallax from '@/components/Banner_Parallax';
import { FullSlip, SlipItem } from 'react-fullslip';

interface IAppProps {}

const WrapContainer: React.FunctionComponent<IAppProps> = (props) => {
  let options = {
    navigation: true, //默认true
    activeClass: 'active', //默认active
    duration: 1000, //默认1000
    transverse: false, //默认纵向false
    // navImage: [
    //   require('@/assets/icon/home.png'),
    //   require('@/assets/icon/home.png'),
    //   require('@/assets/icon/home.png'),
    //   require('@/assets/icon/home.png'),
    // ], //默认无图片
    arrowNav: false, //默认无箭头 false
  };
  return (
    <div className="WrapContainer">
      <FullSlip {...options}>
        <SlipItem style={{ backgroundColor: '#C6E2FF' }}>
          <Banner_Parallax />
        </SlipItem>
        <SlipItem style={{ backgroundColor: '#C1FFC1' }}>page2</SlipItem>
        <SlipItem style={{ backgroundColor: '#FFEC8B' }}>page3</SlipItem>
      </FullSlip>
    </div>
  );
};

export default WrapContainer;
