import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M563.6 416H12.36c-25 0-11.63 64 36 64h479.5c47.64 0 60.74-64 35.74-64zM511.1 32h-272v64l38.63 38.63c6 6 9.374 14.13 9.374 22.63L287.1 224c0 17.62-14.37 32-32 32h-64c-16.7 0-32-14.4-32-32v-66.7c0-8.5 3.375-16.63 9.375-22.63L207.1 96V32h-88c-6.375 0-12.5 2.5-17 7-3.61 4.5-6.11 10.63-6.11 17l-.89 232c0 53 42.1 96 96 96h192c53 0 96-43 96-96h31.1c70.75 0 128-57.25 128-128S582.7 32 511.1 32zm0 192H480l-.001-128h32c35.38 0 64 28.62 64 64S547.4 224 511.1 224z" />
  </svg>
);

const SvgMugTeaSaucerSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMugTeaSaucerSolid;
