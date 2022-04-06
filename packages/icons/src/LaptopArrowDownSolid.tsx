import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M223 199c-9.375 9.375-9.375 24.56 0 33.94l80 80c9.375 9.375 24.56 9.375 33.94 0l80-80c9.375-9.375 9.375-24.56 0-33.94s-24.56-9.375-33.94 0l-39 39.1V56c0-13.25-10.75-24-23.1-24S296 42.75 296 56v182.1L256.1 199c-3.8-4.7-9.9-7-16.1-7s-12.3 2.3-17 7zm289 153h64V80c0-26.37-21.6-48-48-48H384v64h128v256zm112 32H16c-8.75 0-16 7.3-16 16v16c0 35.25 28.75 64 64 64h512c35.25 0 64-28.75 64-64v-16c0-8.7-7.2-16-16-16zM128 96h128V32H112c-26.37 0-48 21.63-48 48v272h64V96z" />
  </svg>
);

const SvgLaptopArrowDownSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgLaptopArrowDownSolid;
