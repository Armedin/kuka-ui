import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 32H64C28.66 32 0 60.66 0 96v320c0 35.34 28.66 64 64 64h320c35.34 0 64-28.66 64-64V96c0-35.34-28.7-64-64-64zm-33.4 270.6L247.5 405.7c-8.8 8.9-18.6 10.3-23.5 10.3-4.881 0-14.65-1.391-22.65-9.398L97.38 302.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8V128c0-17.69 14.33-32 32-32s32 14.31 32 32v178.8l49.38-49.38c12.5-12.5 32.75-12.5 45.25 0s12.47 32.68-.03 45.18z" />
  </svg>
);

const SvgSquareArrowDownSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquareArrowDownSolid;
