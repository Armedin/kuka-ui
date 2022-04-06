import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M287.2 32c-67.49 0-138.6 37.66-193.7 92.7C-82.77 300.7 19.86 480 160.9 480c67.49 0 138.9-37.67 193.1-92.71C531.3 210.1 427.4 32 287.2 32zM115.9 147.3C168.2 95.15 232.2 64 287.3 64l.57.001c30.08.116 58.71 13.46 80.34 34.31l.748.723c-18.84 61.79-60.51 131.5-153.8 149-80.5 15.12-137.1 60.78-165.1 132.6C12.43 334.4 32.1 231.1 115.9 147.3zm216.3 217.4C279.9 416.9 215.9 448 160.8 448c-47.12 0-62.83-16.11-87.01-40.27C96.57 337.8 146.9 293.4 221.1 279.5c82.92-15.6 142.1-68.62 172.1-154 54.9 63.9 2.9 175.3-61 239.2z" />
  </svg>
);

const SvgCoffeeBean = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCoffeeBean;
