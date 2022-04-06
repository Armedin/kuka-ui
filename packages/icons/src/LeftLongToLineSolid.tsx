import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M64 96v320c0 17.7-14.33 32-32 32S0 433.7 0 416V96c0-17.67 14.33-32 32-32s32 14.33 32 32zm71.7 142.4 112.1-104c6.9-6.5 17.1-8.2 25.9-5.3 8.7 4.7 14.4 13.4 14.4 22V208H608c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32H288.1v56c0 9.5-5.7 18.2-14.4 22-8.8 3.8-19 2.1-25.9-4.4l-112.1-104c-10.3-9.5-10.3-25.7 0-35.2z" />
  </svg>
);

const SvgLeftLongToLineSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgLeftLongToLineSolid;
