import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M31.99 256C49.62 256 64 243.5 64 228V0L.993 221.1C-4.132 238.9 11.24 256 31.99 256zM575 221.1 512 0v228c0 15.5 14.38 28 32 28 20.8 0 36.1-17.1 31-34.9zm-95-10.2C480 90.38 288 0 288 0S95.1 90.38 95.1 210.9c0 82.75-22.88 145.9-31.13 180.6-3.375 14.5 3.625 29.38 16.38 35.25L255.1 512V256l-96-32v-32h256l.9 32-96 32v255.1l174.9-85.25c12.63-5.875 19.75-20.75 16.25-35.25-8.25-33.8-31.15-97-31.15-179.7z" />
  </svg>
);

const SvgHelmetBattleSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgHelmetBattleSolid;
