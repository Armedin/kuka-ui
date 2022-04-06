import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 32H64C28.65 32 0 60.66 0 96v320c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64V96c0-35.34-28.7-64-64-64zm-9.4 246.6L271.5 381.7c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25L274.8 288H96c-17.69 0-32-14.3-32-32s14.31-32 32-32h178.8l-49.38-49.38c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l103.1 103.1C382.6 241.3 384 251.1 384 256c0 4.9-1.4 14.7-9.4 22.6z" />
  </svg>
);

const SvgSquareArrowRightSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquareArrowRightSolid;
