import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M482.7 11.86c-29.23-20.88-70.21-13-93.44 14.25L187.9 261.5c-9 10.5-1.5 26.5 12.1 26.5h131.9c9.369 0 18.24-4.125 24.36-11.25l138.9-162.4C521.6 83.49 516.5 35.86 482.7 11.86zM0 512c88.97.125 174.1-29.12 239.6-81.13.256-.25.383-.375.639-.5C272.3 404.6 288 366.4 288 328v-8H179.1L0 512z" />
  </svg>
);

const SvgScalpelSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgScalpelSolid;
