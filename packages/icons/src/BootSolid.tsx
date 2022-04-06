import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m0 480 32 32h64l32-32 32 32h64l32-32 32 32h64l32-32 32 32h64l32-32v-32H0v32zM352 80V16c0-8.75-7.2-16-16-16H16C7.25 0 0 7.25 0 16v80h336c8.8 0 16-7.25 16-16zm87.2 205.8L320 256h-48c-8.8 0-16-7.2-16-16s7.2-16 15.1-16H320v-32h-48c-8.8 0-16-7.2-16-16s7.2-16 15.1-16H320v-32H0v288h512v-37.04c0-44.16-30.9-82.46-72.8-93.16z" />
  </svg>
);

const SvgBootSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBootSolid;
