import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="m362.7 203.9-159.1 144a16.06 16.06 0 0 1-21.44 0l-160.87-144c-6.56-6.8-7.09-16-1.19-22.6 6.28-6.9 16.4-6.8 22.63-1.2L192 314.5l149.3-134.4c6.594-5.877 16.69-5.361 22.62 1.188 5.88 6.612 5.38 15.812-1.22 22.612z" />
  </svg>
);

const SvgAngleDown = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgAngleDown;
