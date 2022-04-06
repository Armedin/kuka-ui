import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 32H64C28.66 32 0 60.66 0 96v320c0 35.34 28.66 64 64 64h320c35.34 0 64-28.66 64-64V96c0-35.34-28.7-64-64-64zm-33.4 222.6c-12.5 12.5-32.75 12.5-45.25 0L256 205.3V384c0 17.69-14.33 32-32 32s-32-14.31-32-32V205.3l-49.4 49.3c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l103.1-103.1C209.3 97.4 219.1 96 224 96c4.881 0 14.65 1.391 22.65 9.398l103.1 103.1c13.35 13.402 13.35 33.602.85 46.102z" />
  </svg>
);

const SvgSquareArrowUpSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquareArrowUpSolid;
