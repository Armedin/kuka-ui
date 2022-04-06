import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M256 32c0-17.67 14.3-32 32-32s32 14.33 32 32-14.3 32-32 32-32-14.33-32-32zm-81.4 368.5c-56.7-56.8-62-145.5-15.7-208.1l111.9 111.9c9.3 9.4 24.5 9.4 33.9 0 9.4-9.4 9.4-24.6 0-33.9L192.8 158.5c62.6-46.3 151.3-41 208.1 15.7 62.4 62.5 62.4 162.9 0 226.3-62.5 62.4-163.8 62.4-226.3 0zM576 288c0 17.7-14.3 32-32 32s-32-14.3-32-32 14.3-32 32-32 32 14.3 32 32zM0 288c0-17.7 14.33-32 32-32s32 14.3 32 32-14.33 32-32 32-32-14.3-32-32zM128 96c0 17.7-14.3 32-32 32-17.67 0-32-14.3-32-32 0-17.67 14.33-32 32-32 17.7 0 32 14.33 32 32zm320 0c0-17.67 14.3-32 32-32s32 14.33 32 32c0 17.7-14.3 32-32 32s-32-14.3-32-32zM128 480c0 17.7-14.3 32-32 32-17.67 0-32-14.3-32-32s14.33-32 32-32c17.7 0 32 14.3 32 32zm320 0c0-17.7 14.3-32 32-32s32 14.3 32 32-14.3 32-32 32-32-14.3-32-32z" />
  </svg>
);

const SvgDialMedLowSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgDialMedLowSolid;
