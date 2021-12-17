import React, { useEffect, useRef } from 'react';
// import Parallax from 'parallax-js'
import './style.less';

interface IAppProps {}

const Banner_Parallax: React.FunctionComponent<IAppProps> = (props) => {
  const str = () => {
    let x = 0;
    let x_new = 0;
    let x_offset = 0;

    let banner = document.querySelector('.banner');
    let images = document.querySelectorAll('.image');

    let window_width = document.documentElement.clientWidth;
    let step = window_width / 2 / 5; // 屏幕移动 1/2 屏幕宽度，模糊度发生 5px 变化
    //   console.log("step: ", step);
    let data_images = [
      { x: 0, b: 4 },
      { x: 0, b: 0 },
      { x: 0, b: 1 },
      { x: 0, b: 4 },
      { x: 0, b: 5 },
      { x: 0, b: 6 },
    ];

    // 初始函数
    let init = () => {
      for (const key in images) {
        if (images.hasOwnProperty(key)) {
          const element = images[key];
          const element_data = data_images[key];
          element.children[0].style = `transform: .2s linear; transform: translate(${element_data.x}px); filter: blur(${element_data.b}px);`;
        }
      }
    };

    // 鼠标悬停
    banner.addEventListener('mouseover', (e) => {
      x = e.clientX;
      // console.log(x);
    });

    // 鼠标移入
    banner.addEventListener('mousemove', (e) => {
      x_new = e.clientX;
      // console.log(x_new);
      x_offset = x - x_new;
      // console.log(x_offset);
      for (const key in images) {
        if (images.hasOwnProperty(key)) {
          let level = (6 - parseInt(key)) * 10;
          const element = images[key];
          const element_data = data_images[key];
          let b_new = Math.abs(element_data.b + x_offset / step);
          let l_new = 0 - x_offset / level;
          element.children[0].style = `transform: translate(${l_new}px);filter:blur(${b_new}px);`;
        }
      }
    });

    // 鼠标移出恢复默认
    banner.addEventListener('mouseout', (e) => {
      init();
    });

    // 小女孩眨眼函数
    let blink_index = 0;
    let timeout = 4000;
    let blink = () => {
      if (blink_index == 4) {
        blink_index = 1;
        timeout = 4000;
      } else {
        blink_index += 1;
        timeout = 30;
      }

      images[1].children[0].src = require(`@/images/girl${blink_index}.png`);
      setTimeout(() => {
        blink();
      }, timeout);
    };

    // 触发初始函数和小女孩眨眼函数
    window.onload = () => {
      init();
      blink();
    };
  };

  useEffect(() => {
    str();
  }, []);

  return (
    <div className="banner">
      <div className="image">
        <img width="3000" height="300" src={require('@/images/bg.png')} />
      </div>
      <div className="image">
        <img width="1800" height="300" src={require('@/images/girl1.png')} />
      </div>
      <div className="image">
        <img
          width="3000"
          height="300"
          src={require('@/images/grassland.png')}
        />
      </div>
      <div className="image">
        <img width="1800" height="300" src={require('@/images/mushroom.png')} />
      </div>
      <div className="image">
        <img width="1800" height="236" src={require('@/images/spirit.png')} />
      </div>
      <div className="image">
        <img width="1950" height="300" src={require('@/images/leaf.png')} />
      </div>
    </div>
  );
};

export default Banner_Parallax;
