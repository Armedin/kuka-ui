import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M203.3 379.3c-6.2 6.3-16.4 6.3-22.6 0l-56-56c-6.3-6.2-6.3-16.4 0-22.6 6.2-6.3 16.4-6.3 22.6 0l44.7 44.7 100.7-100.7c6.2-6.3 16.4-6.3 22.6 0 6.3 6.2 6.3 16.4 0 22.6l-112 112zm239.2-215.7c3.6 8.2 5.5 17 5.5 26V416c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V189.6c0-9 1.879-17.8 5.516-26L47.11 70.01C57.38 46.89 80.3 32 105.6 32h236.8c25.3 0 48.2 14.9 58.5 38.01l41.6 93.59zM240 160h165.9l-34.2-77c-5.2-11.55-16.6-19-29.3-19H240v96zM32 192v224c0 17.7 14.33 32 32 32h320c17.7 0 32-14.3 32-32V192H32zM208 64H105.6c-12.65 0-24.11 7.45-29.25 19l-34.22 77H208V64z" />
  </svg>
);

const SvgBoxCheck = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBoxCheck;
