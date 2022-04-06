import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M447.1 64H64.04c-19.49 0-34.36 17.25-31.74 36.5l55.99 292.6c4.5 31.5 31.51 54.9 63.51 54.9h208.9c31.74 0 58.86-23.38 63.36-54.89l55.61-292.6C482.3 81.25 467.5 64 447.1 64zm-54.8 324.6c-2.125 15.75-15.87 27.51-31.62 27.51h-208.9c-15.87 0-29.49-11.75-31.74-27.88L99.29 288.1h313.7L392.3 388.6zm24.8-132.5H94.29L64.04 96.01h383.9L417.1 256.1z" />
  </svg>
);

const SvgWhiskeyGlass = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgWhiskeyGlass;
