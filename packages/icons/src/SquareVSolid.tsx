import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm-34.5 130.7-104 208c-4.1 8.2-12.4 13.3-21.5 13.3s-17.41-5.141-21.47-13.27l-104-208c-5.92-11.83-1.12-26.23 10.77-32.23 11.92-5.891 26.28-1.125 32.2 10.73L224 306.3l82.53-165.1c5.938-11.86 20.34-16.62 32.2-10.73 11.87 6.03 16.67 20.43 10.77 32.23z" />
  </svg>
);

const SvgSquareVSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquareVSolid;
