import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M192 96c8.8 0 16 7.2 16 16v128c0 8.8-7.2 16-16 16s-16-7.2-16-16V112c0-8.8 7.2-16 16-16zm24 224c0 13.3-10.7 24-24 24s-24-10.7-24-24 10.7-24 24-24 24 10.7 24 24zm168-128c0 87.4-117 243-168.3 307.2-12.3 15.3-35.1 15.3-47.4 0C116.1 435 0 279.4 0 192 0 85.96 85.96 0 192 0c106 0 192 85.96 192 192zM192 32c-88.4 0-160 71.6-160 160 0 15.6 5.43 37 16.56 63.4 10.91 25.9 26.24 54 43.58 82.1C126.2 392.8 166.6 445.7 192 477.6c25.4-31.9 65.8-84.8 99.9-140.1 17.3-28.1 32.6-56.2 43.5-82.1C346.6 229 352 207.6 352 192c0-88.4-71.6-160-160-160z" />
  </svg>
);

const SvgLocationExclamation = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgLocationExclamation;
