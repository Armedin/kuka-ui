import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M288 224h192c17.7 0 32 14.3 32 32s-14.3 32-32 32H288v192c0 17.7-14.3 32-32.9 32-16.8 0-32-14.3-32-32V288H32c-17.67 0-32-14.3-32-32s14.33-32 32-32h191.1V32c0-17.67 15.2-32 32-32C273.7 0 288 14.33 288 32v192z" />
  </svg>
);

const SvgPlusLargeSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPlusLargeSolid;
