import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M240 32c26.5 0 48 21.49 48 48v352c0 26.5-21.5 48-48 48h-32c-26.5 0-48-21.5-48-48V80c0-26.51 21.5-48 48-48h32zm0 32h-32c-8.8 0-16 7.16-16 16v352c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V80c0-8.84-7.2-16-16-16zM80 224c26.5 0 48 21.5 48 48v160c0 26.5-21.5 48-48 48H48c-26.51 0-48-21.5-48-48V272c0-26.5 21.49-48 48-48h32zm0 32H48c-8.84 0-16 7.2-16 16v160c0 8.8 7.16 16 16 16h32c8.84 0 16-7.2 16-16V272c0-8.8-7.16-16-16-16zm240-112c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48v288c0 26.5-21.5 48-48 48h-32c-26.5 0-48-21.5-48-48V144zm32 0v288c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V144c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16z" />
  </svg>
);

const SvgChartSimple = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgChartSimple;
