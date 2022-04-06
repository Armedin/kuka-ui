import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="m96 255.1 192 .9c17.6 0 32-14.4 32-32V31.1C320 13.5 305.6 0 288 0H96C78.4 0 64 14.4 64 32v192c0 17.6 14.4 31.1 32 31.1zm320 0h128c17.6 0 32-14.4 32-31.1V96c0-17.6-14.4-32-32-32H416c-17.6 0-32 14.4-32 32v128c0 17.6 14.4 31.1 32 31.1zM624 384c8.75 0 16-7.25 16-16v-32c0-8.75-7.25-16-16-16H16c-8.75 0-16 7.3-16 16v32c0 8.8 7.25 16 16 16h48v64H16c-8.75 0-16 7.3-16 16v32c0 8.8 7.25 16 16 16h608c8.75 0 16-7.25 16-16v-32c0-8.75-7.25-16-16-16h-48v-64h48zm-336 64H128v-64h160v64zm224 0H352v-64h160v64z" />
  </svg>
);

const SvgPalletBoxesSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPalletBoxesSolid;
