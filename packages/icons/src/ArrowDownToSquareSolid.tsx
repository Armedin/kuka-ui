import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M448 96h-64v64h64v288H64V160h64V96H64c-35.28 0-64 28.7-64 64v288c0 35.28 28.72 64 64 64h384c35.28 0 64-28.72 64-64V160c0-35.3-28.7-64-64-64zM232.4 373.8c12.12 13.26 35.06 13.26 47.19 0l87.1-96.09c11.94-13.05 11.06-33.31-1.969-45.27-13.71-12.57-33.9-10.37-45.22 1.969L288 269.8V32.03C288 14.33 273.7 0 256 0s-32 14.33-32 32.03v237.8l-32.4-35.43c-12-13-32.2-13.9-45.2-2-13.1 12-13.9 32.2-2 45.3l88 96.1z" />
  </svg>
);

const SvgArrowDownToSquareSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowDownToSquareSolid;
