import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M224 0h-64C71.62 0 0 71.62 0 160v192c0 88.38 71.62 160 160 160h64c88.38 0 160-71.63 160-160V160C384 71.62 312.4 0 224 0zm0 159.1c0 18.5-14.4 32.9-32 32.9s-32-14.4-32-32.9v-32c0-17.62 14.38-32 32-32 17.62 0 32 14.38 32 32v32z" />
  </svg>
);

const SvgComputerMouseScrollwheelSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgComputerMouseScrollwheelSolid;
