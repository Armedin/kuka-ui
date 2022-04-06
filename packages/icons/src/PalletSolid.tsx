import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M624 384c8.75 0 16-7.25 16-16v-32c0-8.75-7.25-16-16-16H16c-8.75 0-16 7.3-16 16v32c0 8.8 7.25 16 16 16h48v64H16c-8.75 0-16 7.3-16 16v32c0 8.8 7.25 16 16 16h608c8.75 0 16-7.25 16-16v-32c0-8.75-7.25-16-16-16h-48v-64h48zm-336 64H128v-64h160v64zm224 0H352v-64h160v64z" />
  </svg>
);

const SvgPalletSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPalletSolid;
