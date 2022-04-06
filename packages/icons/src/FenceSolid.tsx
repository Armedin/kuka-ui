import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M121.6 98.13c4.2 5.57 6.4 12.27 6.4 19.17V160h32v64h-32v128h32v64h-32v32c0 17.7-14.3 32-32 32H32c-17.67 0-32-14.3-32-32V117.3c0-6.9 2.246-13.6 6.4-19.17L51.2 38.4C54.22 34.37 58.96 32 64 32c5.04 0 9.78 2.37 12.8 6.4l44.8 59.73zm192 0c4.2 5.57 6.4 12.27 6.4 19.17V160h32v64h-32v128h32v64h-32v32c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32V117.3c0-6.9 2.2-13.6 6.4-19.17l44.8-59.73c3-4.03 6.9-6.4 12.8-6.4 5 0 9.8 2.37 12.8 6.4l44.8 59.73zM448 32c5 0 9.8 2.37 12.8 6.4l44.8 59.73c4.2 5.57 6.4 12.27 6.4 19.17V448c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32V117.3c0-6.9 2.2-13.6 6.4-19.17l44.8-59.73c3-4.03 6.9-6.4 12.8-6.4z" />
  </svg>
);

const SvgFenceSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFenceSolid;
