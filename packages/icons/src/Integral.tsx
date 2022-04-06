import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M288 72c0 8.844-7.156 16-16 16s-16-7.16-16-16c0-22.06-17.9-40-40-40s-40 17.94-40 40v368c0 39.69-32.3 72.01-72 72.01S32 479.7 32 440c0-8.844 7.156-16 16-16s16 7.2 16 16c0 22.1 17.94 40 40 40s40-17.94 40-40V72C144 32.31 176.3.01 216 .01s72 32.3 72 71.99z" />
  </svg>
);

const SvgIntegral = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgIntegral;
