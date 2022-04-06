import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M506.5 419.8c7.3 12.3 7.3 27.6.2 40.1-7.1 12.4-20.4 20.1-34.7 20.1H40c-14.34 0-27.59-7.7-34.713-20.1-7.126-12.5-7.043-27.8.216-40.1L221.5 51.75C228.7 39.52 241.8 32 256 32s27.3 7.52 34.5 19.75l216 368.05z" />
  </svg>
);

const SvgTriangleSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTriangleSolid;
