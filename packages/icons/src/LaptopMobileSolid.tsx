import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M604 127.1H420c-19.9 0-36 17-36 36.9v312c0 19.9 16.1 36 36 36h184c19.9 0 36-16.1 36-36V164c0-19.9-16.1-36.9-36-36.9zM576 448H448V192h128v256zM128 64h320v32h64V48c0-26.5-21.5-47.88-47.88-48H111.9C85.5.125 64 21.5 64 48v240H16c-8.875 0-16 7.1-16 16v16c.125 35.25 28.62 63.88 63.88 64H352v-96H128V64z" />
  </svg>
);

const SvgLaptopMobileSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgLaptopMobileSolid;
