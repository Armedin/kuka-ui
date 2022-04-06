import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="m128 195.3 119.2-34.1c17-4.8 34.7 5 39.6 22 4.8 17-5 34.7-22 39.6L128 261.9V416h224c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.67 0-32-14.3-32-32V280.1l-23.21 6.7c-16.99 4.8-34.703-5-39.558-22-4.855-17 4.984-34.7 21.978-39.6L64 213.6V64c0-17.67 14.33-32 32-32 17.7 0 32 14.33 32 32v131.3z" />
  </svg>
);

const SvgLitecoinSignSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgLitecoinSignSolid;
