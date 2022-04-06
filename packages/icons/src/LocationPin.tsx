import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M168.3 499.2C116.1 435 0 279.4 0 192 0 85.96 85.96 0 192 0c106 0 192 85.96 192 192 0 87.4-117 243-168.3 307.2-12.3 15.3-35.1 15.3-47.4 0zm167.1-243.8C346.6 229 352 207.6 352 192c0-88.4-71.6-160-160-160S32 103.6 32 192c0 15.6 5.43 37 16.56 63.4 10.91 25.9 26.24 54 43.58 82.1C126.2 392.8 166.6 445.7 192 477.6c25.4-31.9 65.8-84.8 99.9-140.1 17.3-28.1 32.6-56.2 43.5-82.1z" />
  </svg>
);

const SvgLocationPin = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgLocationPin;
