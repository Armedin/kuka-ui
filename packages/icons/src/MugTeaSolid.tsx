import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M447.1 64h-272v64l38.63 38.63c6 6 9.374 14.13 9.374 22.63L223.1 256c0 17.62-14.38 32-32 32h-64c-17.62 0-32-14.38-32-32v-66.7c0-8.5 3.375-16.63 9.375-22.63L143.1 128V64h-88c-6.375 0-12.5 2.5-17 7s-7 10.63-7 17v264c0 53 43 96 96 96h192c53 0 96-43 96-96l.9-32h31.1c71.6 0 128.9-57.2 128.9-128S518.7 64 447.1 64zm0 192h-32V128h32c35.38 0 64 28.62 64 64s-27.7 64-64 64z" />
  </svg>
);

const SvgMugTeaSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMugTeaSolid;
