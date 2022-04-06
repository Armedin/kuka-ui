import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M624 383.1H16c-8.75 0-16 7.25-16 16v16c0 35.25 28.75 64 64 64h512c35.25 0 64-28.75 64-64v-16c0-7.9-7.2-16-16-16zM576 448H64c-17.64 0-32-14.36-32-32h576c0 17.6-14.4 32-32 32zM80 352c8.84 0 16-7.2 16-16V96c0-17.66 14.36-32 32-32h384c17.64 0 32 14.34 32 32v240c0 8.844 7.156 16 16 16s16-7.156 16-16V96c0-35.28-28.7-64-64-64H128c-35.3 0-64 28.72-64 64v240c0 8.8 7.16 16 16 16z" />
  </svg>
);

const SvgLaptop = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgLaptop;
