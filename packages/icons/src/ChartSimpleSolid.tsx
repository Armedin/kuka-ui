import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M160 80c0-26.51 21.5-48 48-48h32c26.5 0 48 21.49 48 48v352c0 26.5-21.5 48-48 48h-32c-26.5 0-48-21.5-48-48V80zM0 272c0-26.5 21.49-48 48-48h32c26.5 0 48 21.5 48 48v160c0 26.5-21.5 48-48 48H48c-26.51 0-48-21.5-48-48V272zM400 96c26.5 0 48 21.5 48 48v288c0 26.5-21.5 48-48 48h-32c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h32z" />
  </svg>
);

const SvgChartSimpleSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgChartSimpleSolid;
