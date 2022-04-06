import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 32H64C28.66 32 0 60.66 0 96v320c0 35.34 28.66 64 64 64h320c35.34 0 64-28.66 64-64V96c0-35.34-28.7-64-64-64zm-49.4 334.6c-6.2 6.3-14.4 9.4-22.6 9.4s-16.38-3.125-22.62-9.375L168 245.3V312c0 17.69-14.31 32-32 32s-32-14.31-32-32V168c0-17.69 14.31-32 32-32h144c17.69 0 32 14.31 32 32s-14.31 32-32 32h-66.7l121.4 121.4c12.4 12.5 12.4 32.7-.1 45.2z" />
  </svg>
);

const SvgSquareArrowUpLeftSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquareArrowUpLeftSolid;
