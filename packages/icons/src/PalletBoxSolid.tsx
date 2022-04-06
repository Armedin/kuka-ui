import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M160 255.1h320c17.6 0 32-14.4 32-31.1V31.1c0-17.6-14.4-32-32-32h-96v128l-64-32-64 32V-.9L160 0c-17.6 0-32 14.4-32 32v192c0 17.6 14.4 31.1 32 31.1zM624 384c8.75 0 16-7.25 16-16v-32c0-8.75-7.25-16-16-16H16c-8.75 0-16 7.3-16 16v32c0 8.8 7.25 16 16 16h48v64H16c-8.75 0-16 7.3-16 16v32c0 8.8 7.25 16 16 16h608c8.75 0 16-7.25 16-16v-32c0-8.75-7.25-16-16-16h-48v-64h48zm-336 64H128v-64h160v64zm224 0H352v-64h160v64z" />
  </svg>
);

const SvgPalletBoxSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPalletBoxSolid;
