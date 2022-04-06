import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M32 64C14.33 64 0 78.33 0 95.1V416c0 17.7 14.33 32 31.1 32S64 433.7 64 416V95.1C64 78.33 49.67 64 32 64zm408.8 174.5-144.1-136a24.064 24.064 0 0 0-26-4.594C261.9 101.8 256.2 110.4 256.2 120v72H128.1c-17.7 0-32.05 14.3-32.05 32v64c0 17.67 14.35 32 32.04 32h128.1v72c0 9.578 5.708 18.25 14.51 22.05 8.805 3.781 19.03 1.984 26-4.594l144.1-136c9.6-9.056 9.6-25.856 0-34.956z" />
  </svg>
);

const SvgRightFromLineSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgRightFromLineSolid;
