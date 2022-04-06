import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M54.63 502.6 176 381.3V432c0 17.69 14.31 32 32 32s32-14.31 32-32V304c0-4.164-.848-8.312-2.465-12.22-3.235-7.88-9.435-14.08-17.335-17.28-3.9-1.7-8-2.5-12.2-2.5H80c-17.69 0-32 14.31-32 32s14.31 32 32 32h50.75L9.35 457.4c-12.5 12.5-12.5 32.75 0 45.25s32.78 12.45 45.28-.05zM274.5 220.2a31.965 31.965 0 0 0 17.32 17.32C295.7 239.2 299.8 240 304 240h128c17.69 0 32-14.31 32-32s-14.31-32-32-32h-50.75l121.4-121.4c12.5-12.5 12.5-32.75 0-45.25-12.49-12.49-32.74-12.51-45.25 0L336 130.8V80c0-17.69-14.31-32-32-32s-32 14.31-32 32v127.1c0 5.1.8 9.2 2.5 13.1z" />
  </svg>
);

const SvgArrowDownLeftAndArrowUpRightToCenterSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowDownLeftAndArrowUpRightToCenterSolid;
