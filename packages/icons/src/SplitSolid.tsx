import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M504.1 382.1c9.387 9.387 9.387 24.61 0 33.99l-80 79.98c-15.13 15.12-40.99 4.406-40.99-16.98V432H320a31.97 31.97 0 0 1-23.91-10.75L177.6 288H32c-17.69 0-32-14.3-32-32s14.31-32 32-32h145.6L296.1 90.7C302.2 83.91 310.9 80 320 80h63.97V32.06c0-21.39 25.86-32.11 40.99-16.98l80 79.98c9.387 9.383 9.387 24.6 0 33.99l-79.99 79.97c-15.13 15.12-40.1 4.406-40.1-16.98V144h-49.59L234.8 256l99.58 112h49.59v-48.9c0-21.39 25.87-32.11 40.1-16.98l80.03 79.98z" />
  </svg>
);

const SvgSplitSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSplitSolid;
