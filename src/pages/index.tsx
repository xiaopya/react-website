import { useEffect } from 'react';
import { Particle } from '@/components/Particle';
import { MessageOnce } from '@/utils/tool';
import { CarouselApp } from '@/components/Carousel';
import 'antd/dist/antd.css';

export default function () {
  // 第一次进入 弹出欢迎 提示框
  useEffect(() => {
    MessageOnce();
  }, []);

  return (
    <>
      {/* 走马灯 */}
      <CarouselApp />
      {/* 粒子背景图 */}
      <Particle />
    </>
  );
}
