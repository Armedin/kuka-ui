import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M480 464v-40.45a64 64 0 0 0-35.38-57.24l-121.2-60.62a64 64 0 0 1-35.38-57.24V32c0-17.67-14.33-32-31.1-32H160v240c0 8.844-7.156 16-15.1 16s-16.9-7.2-16.9-16V0H64C44.76 0 29.86 16.87 32.25 35.97l24.44 161.5c4.816 38.53.941 77.66-11.34 114.5A260.071 260.071 0 0 0 32 394.21V488c0 13.25 10.75 24 23.1 24h79.1c13.25 0 23.1-10.75 23.1-24v-15.73L286.4 511c4.9.7 7.3 1 9.6 1h183.1c14.2 0 24.9-10.7 24.9-24s-10.7-24-24-24z" />
  </svg>
);

const SvgBootHeeledSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBootHeeledSolid;
