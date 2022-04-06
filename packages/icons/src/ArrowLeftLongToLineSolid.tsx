import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M0 96c0-17.67 14.33-32 32-32s32 14.33 32 32v320c0 17.7-14.33 32-32 32S0 433.7 0 416V96zm265.4 310.6-128-128c-12.5-12.5-12.5-32.7 0-45.2l128-128c12.5-12.52 32.7-12.52 45.2 0 12.5 12.5 12.5 32.7 0 45.2L237.2 224H608c17.7 0 32 14.3 32 32s-14.3 32-32 32H237.2l73.4 73.4c12.5 12.5 12.5 32.7 0 45.2s-32.7 12.5-45.2 0z" />
  </svg>
);

const SvgArrowLeftLongToLineSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowLeftLongToLineSolid;
