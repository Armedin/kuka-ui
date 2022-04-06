import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M32.05 319.1h128.1l-.05 72.9c0 9.578 5.708 18.25 14.51 22.05 8.803 3.781 19.03 1.984 26-4.594l144.1-136c9.602-9.062 9.602-25.84 0-34.91L200.6 102.5c-6.9-6.54-17.1-8.33-26-4.55-8.8 3.75-14.5 12.45-14.5 21.15v72H32.05c-17.69 0-32.02 14.33-32.02 32v64c-.007 18.6 14.33 32 32.02 32zM415.1 63.99c-16.8 0-31.1 14.33-31.1 32v320c0 17.71 14.3 32.01 31.1 32.01 18.6 0 32.9-14.3 32.9-32V95.99c0-17.67-14.3-32-32.9-32z" />
  </svg>
);

const SvgRightToLineSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgRightToLineSolid;
