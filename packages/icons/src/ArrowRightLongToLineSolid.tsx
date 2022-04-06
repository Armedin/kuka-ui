import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M640 416c0 17.7-14.3 32-32 32s-32-14.3-32-32V96c0-17.67 14.3-32 32-32s32 14.33 32 32v320zm-310.6-9.4c-12.5-12.5-12.5-32.7 0-45.2l73.3-73.4H32c-17.69 0-32-14.3-32-32s14.31-32 32-32h370.7l-73.3-73.4c-12.5-12.5-12.5-32.7 0-45.2 12.5-12.52 32.7-12.52 45.2 0l128 128c12.5 12.5 12.5 32.7 0 45.2l-128 128c-12.5 12.5-32.7 12.5-45.2 0z" />
  </svg>
);

const SvgArrowRightLongToLineSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowRightLongToLineSolid;
