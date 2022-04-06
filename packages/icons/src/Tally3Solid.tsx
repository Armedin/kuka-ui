import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M32 32c17.67 0 32 14.33 32 32v384c0 17.7-14.33 32-32 32S0 465.7 0 448V64c0-17.67 14.33-32 32-32zm128 0c17.7 0 32 14.33 32 32v384c0 17.7-14.3 32-32 32s-32-14.3-32-32V64c0-17.67 14.3-32 32-32zm160 416c0 17.7-14.3 32-32 32s-32-14.3-32-32V64c0-17.67 14.3-32 32-32s32 14.33 32 32v384z" />
  </svg>
);

const SvgTally3Solid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTally3Solid;
