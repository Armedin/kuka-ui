import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M448 416V96c0-35.35-28.65-64-64-64H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.3 0 64-28.7 64-64zm-214.1-33.2c-6-2.5-9.9-8.3-9.9-14.8v-64h-96c-17.67 0-32-14.33-32-32v-32c0-17.67 14.33-32 32-32h96v-64c0-6.469 3.891-12.31 9.875-14.78a15.988 15.988 0 0 1 17.44 3.469l112 112c6.248 6.248 6.248 16.38 0 22.62l-112 112C246.7 383.9 239.9 385.3 233.9 382.8z" />
  </svg>
);

const SvgSquareRightSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquareRightSolid;
