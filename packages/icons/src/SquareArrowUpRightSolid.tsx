import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 32H64C28.65 32 0 60.66 0 96v320c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64V96c0-35.34-28.7-64-64-64zm-40 280c0 17.69-14.31 32-32 32s-32-14.31-32-32v-66.7L158.6 366.7c-6.2 6.2-14.4 9.3-22.6 9.3s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L234.8 200H168c-17.69 0-32-14.31-32-32s14.31-32 32-32h144c17.69 0 32 14.31 32 32v144z" />
  </svg>
);

const SvgSquareArrowUpRightSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquareArrowUpRightSolid;
