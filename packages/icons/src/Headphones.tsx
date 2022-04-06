import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M243 32.32C105.5 39.15 0 157.8 0 295.5v120.4C0 451.3 28.63 480 64 480h32c17.62 0 32-14.38 32-32V288c0-17.62-14.38-32-32-32H64c-10.79 0-20.8 2.9-29.72 7.7 14.2-106.8 100.5-193.9 210.4-199.4 120.5-5.965 221.7 83.92 234 199.9-9.08-5.1-19.48-8.2-30.68-8.2h-32c-17.62 0-32 14.38-32 32v160c0 17.62 14.38 32 32 32h32c35.38 0 64-28.75 64-64.13V287.9c0-145.4-122-262.88-269-255.58zM64 288h32v160H64c-17.62 0-32-14.5-32-32.13v-95.75C32 302.5 46.38 288 64 288zm416 127.9c0 17.6-14.4 32.1-32 32.1h-32V288h32c17.62 0 32 14.5 32 32.13v95.77z" />
  </svg>
);

const SvgHeadphones = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgHeadphones;
