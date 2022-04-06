import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M608 64c17.7 0 32 14.33 32 32v320c0 17.7-14.3 32-32 32s-32-14.3-32-32V96c0-17.67 14.3-32 32-32zM504.3 273.6l-112.1 104c-6.9 6.5-17.1 8.2-25.9 4.4-8.7-3.8-14.4-12.5-14.4-22v-56H32c-17.67 0-32-14.3-32-32v-32c0-17.7 14.33-32 32-32h319.9v-56.9c0-8.6 5.7-17.3 14.4-22 8.8-2.9 19-1.2 25.9 5.3l112.1 104c10.3 9.5 10.3 25.7 0 35.2z" />
  </svg>
);

const SvgRightLongToLineSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgRightLongToLineSolid;
