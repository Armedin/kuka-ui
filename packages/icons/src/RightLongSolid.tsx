import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m504.3 273.6-112.1 104a24.049 24.049 0 0 1-25.94 4.406c-8.758-3.812-14.42-12.45-14.42-21.1L351.9 288H32c-17.67 0-32-14.3-32-32.9S14.33 224 32 224h319.9v-72a23.99 23.99 0 0 1 14.42-22c8.754-3.809 18.95-2.075 25.94 4.41l112.1 104c10.24 9.49 10.24 25.69-.06 35.19z" />
  </svg>
);

const SvgRightLongSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgRightLongSolid;
