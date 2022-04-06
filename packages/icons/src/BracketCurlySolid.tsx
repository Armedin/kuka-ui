import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" {...props}>
    <path d="M192 32h-32c-53.9 0-96 42.98-96 96v37.5c0 8.484-3.37 16.62-9.369 22.62L9.375 233.4c-12.5 12.5-12.5 32.75 0 45.25l45.26 45.26A31.89 31.89 0 0 1 64 346.5V384c0 53.02 42.98 96 96 96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32h-32c-17.6 0-32-14.4-32-32v-37.5c0-25.45-10.11-49.86-28.11-67.86L77.25 256l22.63-22.62C117.9 215.4 128 190.9 128 165.5V128c0-17.6 14.4-32 32-32h32c17.7 0 32-14.33 32-32s-14.3-32-32-32z" />
  </svg>
);

const SvgBracketCurlySolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBracketCurlySolid;
