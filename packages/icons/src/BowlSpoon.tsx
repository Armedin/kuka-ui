import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M479.1 223.1H32c-17.62 0-32 14.39-32 32.19 0 95.69 51.5 179 127.1 223.8 0 17.67 14.33 32 32 32h191.1c17.67 0 32-14.33 32-32 76.5-44.81 127.1-128.1 127.1-223.8 1.8-16.89-11.7-32.19-30.2-32.19zm0 33.1c0 80.49-42.98 155.7-112.2 196.2-8.9 5.7-15.8 16.2-15.8 27.6H160a31.99 31.99 0 0 0-15.83-27.61c-69.19-40.53-112.2-115.7-112.2-196.4h447.1v.21zM127 192c62.9 0 90.8-34.6 95.9-80H496c8.8 0 16-7.2 16-16s-7.156-16-16-16H222.9c-5.1-45.36-33-80-95.9-80C56.88 0 0 42.98 0 96s56.88 96 127 96zm0-160c27.9 0 65 6.63 65 64s-37.1 64-65 64c-51.48 0-95-29.3-95-64s43.52-64 95-64z" />
  </svg>
);

const SvgBowlSpoon = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBowlSpoon;
