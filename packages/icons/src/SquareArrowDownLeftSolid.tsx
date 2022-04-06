import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 32H64C28.66 32 0 60.66 0 96v320c0 35.34 28.66 64 64 64h320c35.34 0 64-28.66 64-64V96c0-35.34-28.7-64-64-64zm-49.4 158.6L213.3 312H280c17.69 0 32 14.31 32 32s-14.31 32-32 32H136c-17.69 0-32-14.31-32-32V200c0-17.69 14.31-32 32-32s32 14.31 32 32v66.75l121.4-121.4c12.5-12.5 32.75-12.5 45.25 0s12.45 32.75-.05 45.25z" />
  </svg>
);

const SvgSquareArrowDownLeftSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquareArrowDownLeftSolid;
