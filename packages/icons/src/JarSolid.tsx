import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M32 32C32 14.33 46.33 0 64 0h192c17.7 0 32 14.33 32 32s-14.3 32-32 32H64c-17.67 0-32-14.33-32-32zM0 160c0-35.3 28.65-64 64-64h192c35.3 0 64 28.7 64 64v288c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V160zm256 64H64v160h192V224z" />
  </svg>
);

const SvgJarSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgJarSolid;
