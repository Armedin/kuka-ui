import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M336 0H48C21.49 0 0 21.49 0 48v416c0 26.5 21.49 48 48 48h288c26.51 0 48-21.49 48-48V48c0-26.51-21.5-48-48-48zm16 59.54v392.9L211.7 256 352 59.54zM192 228.5 51.67 32h280.7L192 228.5zM172.3 256 32 452.5V59.54L172.3 256zm19.7 27.5L332.3 480H51.67L192 283.5z" />
  </svg>
);

const SvgNotdef = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgNotdef;
