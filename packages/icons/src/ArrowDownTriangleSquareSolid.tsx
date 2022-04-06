import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M192.4 330.7 160 366.1V64.03C160 46.33 145.67 32 128 32S96 46.33 96 64.03v302L63.6 330.7c-11.42-12.45-31.63-14.43-45.22-1.969-13.03 11.95-13.9 32.22-1.969 45.27l87.1 96.09c12.12 13.26 35.06 13.26 47.19 0l87.1-96.09c11.94-13.05 11.06-33.31-1.969-45.27C224.6 316.8 204.4 317.7 192.4 330.7zm299.7-147.8L408.97 45.8c-11.12-18.38-38.75-18.38-49.88 0l-83.25 137.1c-11 18.25 2.75 41.12 25 41.12h166.3c22.26-.02 35.96-22.92 24.96-41.12zM448 288H320c-17.67 0-31.1 14.33-31.1 32v128c0 17.67 14.33 32 31.1 32h128c17.67 0 32-14.33 32-32V320.9c0-18.6-14.3-32.9-32-32.9z" />
  </svg>
);

const SvgArrowDownTriangleSquareSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowDownTriangleSquareSolid;
