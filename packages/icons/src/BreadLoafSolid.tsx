import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M480 192c0-88.38-107.5-160-240-160S0 103.6 0 192c0 35.38 30.88 64 64 64v192c0 17.62 14.38 32 32 32h288c17.62 0 32-14.38 32-32V256c33.1 0 64-28.6 64-64zM400 32c-2.375 0-4.75.25-7.25.25C465.3 66.38 512 124.6 512 192c0 42.75-26.88 79-64 91.5V448c-.125 11.25-3.125 22.38-8.875 32H544c17.62 0 32-14.38 32-32V256h4c33.1 0 60-28.6 60-64 0-88.4-107.5-160-240-160z" />
  </svg>
);

const SvgBreadLoafSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBreadLoafSolid;
