import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M171.3 267.3c-6.2 6.3-16.4 6.3-22.6 0l-56.01-56c-6.25-6.2-6.25-16.4 0-22.6 6.24-6.3 16.41-6.3 22.61 0l44.7 44.7 100.7-100.7c6.2-6.3 16.4-6.3 22.6 0 6.3 6.2 6.3 16.4 0 22.6l-112 112zM384 192c0 87.4-117 243-168.3 307.2-12.3 15.3-35.1 15.3-47.4 0C116.1 435 0 279.4 0 192 0 85.96 85.96 0 192 0c106 0 192 85.96 192 192zM192 32c-88.4 0-160 71.6-160 160 0 15.6 5.43 37 16.56 63.4 10.91 25.9 26.24 54 43.58 82.1C126.2 392.8 166.6 445.7 192 477.6c25.4-31.9 65.8-84.8 99.9-140.1 17.3-28.1 32.6-56.2 43.5-82.1C346.6 229 352 207.6 352 192c0-88.4-71.6-160-160-160z" />
  </svg>
);

const SvgLocationCheck = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgLocationCheck;
