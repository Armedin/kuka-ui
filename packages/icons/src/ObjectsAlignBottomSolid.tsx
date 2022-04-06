import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M24 512c-13.25 0-24-10.7-24-24s10.75-24 24-24h464c13.3 0 24 10.7 24 24s-10.7 24-24 24H24zM64 48c0-26.51 21.49-48 48-48h64c26.5 0 48 21.49 48 48v288c0 26.5-21.5 48-48 48h-64c-26.51 0-48-21.5-48-48V48zm224 128c0-26.5 21.5-48 48-48h64c26.5 0 48 21.5 48 48v160c0 26.5-21.5 48-48 48h-64c-26.5 0-48-21.5-48-48V176z" />
  </svg>
);

const SvgObjectsAlignBottomSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgObjectsAlignBottomSolid;
