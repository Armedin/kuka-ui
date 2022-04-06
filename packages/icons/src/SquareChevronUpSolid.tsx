import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 32H64C28.66 32 0 60.66 0 96v320c0 35.35 28.66 64 64 64h320c35.34 0 64-28.65 64-64V96c0-35.34-28.7-64-64-64zm-25.4 294.6c-12.5 12.5-32.75 12.5-45.25 0L224 237.3l-89.38 89.38c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l112-112C207.6 163.1 215.8 160 224 160s16.38 3.125 22.62 9.375l112 112C371.1 293.9 371.1 314.1 358.6 326.6z" />
  </svg>
);

const SvgSquareChevronUpSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquareChevronUpSolid;
