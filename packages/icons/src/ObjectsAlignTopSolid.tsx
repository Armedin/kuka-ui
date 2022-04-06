import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M488 0c13.3 0 24 10.75 24 24s-10.7 24-24 24H24C10.75 48 0 37.25 0 24S10.75 0 24 0h464zM64 176c0-26.5 21.49-48 48-48h64c26.5 0 48 21.5 48 48v288c0 26.5-21.5 48-48 48h-64c-26.51 0-48-21.5-48-48V176zm224 0c0-26.5 21.5-48 48-48h64c26.5 0 48 21.5 48 48v160c0 26.5-21.5 48-48 48h-64c-26.5 0-48-21.5-48-48V176z" />
  </svg>
);

const SvgObjectsAlignTopSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgObjectsAlignTopSolid;
