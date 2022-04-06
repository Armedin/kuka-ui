import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M543.1 0h-512C14.33 0 0 14.33 0 31.1c0 17.67 14.33 32.01 31.1 32.01L32 320c0 17.6 14.4 32 32 32h192v34.75l-75.3 75.35c-6.256 6.257-6.277 16.46-.02 22.71l22.54 22.54c6.255 6.257 16.47 6.255 22.73-.002L288 445.3l61.1 62.01c6.256 6.257 16.47 6.259 22.73.002l22.54-22.54c6.256-6.257 6.235-16.46-.02-22.71L320 386.8v-34.75l192-.013c17.6 0 32-14.4 32-32v-256c17.7-.027 32-14.357 32-32.027C576 14.33 561.7 0 543.1 0zM480 288H96V64.01h384V288z" />
  </svg>
);

const SvgPresentationScreenSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPresentationScreenSolid;
