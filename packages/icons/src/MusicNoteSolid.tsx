import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M339.1 6.324A31.909 31.909 0 0 1 352 31.96v64c0 14.25-9.375 26.75-23 30.75l-73 21.39V432c0 44.1-50.1 80-112 80S32 476.1 32 431.1s50.13-80.01 112-80.01c16.38 0 32.5 2.75 48 8V60.33c0-14 9.125-26.38 22.38-30.5L311 1.323c9.6-2.876 20.1-1 28.1 5.001z" />
  </svg>
);

const SvgMusicNoteSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMusicNoteSolid;
