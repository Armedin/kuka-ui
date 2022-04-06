import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 32H64C28.65 32 0 60.66 0 96v320c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64V96c0-35.34-28.7-64-64-64zm-40 312c0 17.69-14.31 32-32 32H168c-17.69 0-32-14.31-32-32s14.31-32 32-32h66.75L113.4 190.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L280 266.8V200c0-17.69 14.31-32 32-32s32 14.31 32 32v144z" />
  </svg>
);

const SvgSquareArrowDownRightSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquareArrowDownRightSolid;
