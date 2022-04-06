import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm32 384c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V96c0-17.64 14.36-32 32-32h320c17.64 0 32 14.36 32 32v320zM304 128c-8.8 0-16 7.2-16 16v149.3c0 32.4-28.7 58.7-64 58.7s-64-26.31-64-58.67V272c0-8.8-7.2-16-16-16s-16 7.2-16 16v21.33c0 49.97 43.1 90.67 96 90.67s96-40.67 96-90.67V144c0-8.8-7.2-16-16-16z" />
  </svg>
);

const SvgSquareJ = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquareJ;
