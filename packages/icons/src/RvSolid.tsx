import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M224 16c0-8.836 7.2-16 16-16h128c8.8 0 16 7.164 16 16v16h128c53 0 96 42.98 96 96 0 17.7-14.3 32-32 32H384v256H254.4c1 5.2 1.6 10.5 1.6 16 0 44.2-35.8 80-80 80s-80-35.8-80-80c0-5.5.55-10.8 1.6-16H96l-77.25-77.3C6.743 326.7 0 310.5 0 293.5V96c0-35.35 28.65-64 64-64h160V16zM112 128c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h128c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16H112zm64 272c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm240-208h100.6c12.9 0 25.4 4.5 35.4 12.7l67.5 55.1c13 10.7 20.5 26.6 20.5 43.4V384c0 17.7-14.3 32-32 32h-33.6c1 5.2 1.6 10.5 1.6 16 0 44.2-35.8 80-80 80s-80-35.8-80-80V192zm80 272c17.7 0 32-14.3 32-32 0-6.6-2.9-12.8-5.5-17.9-5.7-8.5-15.5-14.1-26.5-14.1-11.8 0-22.2 6.4-27.7 16-2.7 4.7-4.3 10.2-4.3 16 0 17.7 14.3 32 32 32zm25.6-222.2c-1.4-1.2-3.2-1.8-5-1.8H464v48h114.1l-56.5-46.2z" />
  </svg>
);

const SvgRvSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgRvSolid;
