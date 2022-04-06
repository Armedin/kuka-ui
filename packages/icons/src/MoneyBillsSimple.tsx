import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M272 208c0-53.9 42.1-96 96-96 53 0 96 42.1 96 96 0 53-43 96-96 96-53.9 0-96-43-96-96zm96-64c-35.3 0-64 28.7-64 64s28.7 64 64 64 64-28.7 64-64-28.7-64-64-64zM576 32c35.3 0 64 28.65 64 64v224c0 35.3-28.7 64-64 64H160c-35.3 0-64-28.7-64-64V96c0-35.35 28.7-64 64-64h416zm0 32H160c-17.7 0-32 14.33-32 32v224c0 17.7 14.3 32 32 32h416c17.7 0 32-14.3 32-32V96c0-17.67-14.3-32-32-32zM32 368c0 44.2 35.82 80 80 80h416c8.8 0 16 7.2 16 16s-7.2 16-16 16H112C50.14 480 0 429.9 0 368V112c0-8.8 7.164-16 16-16 8.84 0 16 7.2 16 16v256z" />
  </svg>
);

const SvgMoneyBillsSimple = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMoneyBillsSimple;
