import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M476.8 288c-15.7 73-79.4 128-156.8 128s-142-55-156.8-128H32c-17.67 0-32-14.3-32-32s14.33-32 32-32h131.2C178 150.1 242.6 96 320 96s141.1 54.1 156.8 128H608c17.7 0 32 14.3 32 32s-14.3 32-32 32H476.8zM320 336c44.2 0 80-35.8 80-80s-35.8-80-80-80-80 35.8-80 80 35.8 80 80 80z" />
  </svg>
);

const SvgCodeCommitSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCodeCommitSolid;
