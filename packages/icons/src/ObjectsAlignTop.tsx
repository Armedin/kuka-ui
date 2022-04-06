import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M496 0c8.8 0 16 7.164 16 16 0 8.84-7.2 16-16 16H16C7.164 32 0 24.84 0 16 0 7.164 7.164 0 16 0h480zM176 128c26.5 0 48 21.5 48 48v288c0 26.5-21.5 48-48 48h-64c-26.51 0-48-21.5-48-48V176c0-26.5 21.49-48 48-48h64zm0 32h-64c-8.8 0-16 7.2-16 16v288c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16zm224-32c26.5 0 48 21.5 48 48v160c0 26.5-21.5 48-48 48h-64c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48h64zm0 32h-64c-8.8 0-16 7.2-16 16v160c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16z" />
  </svg>
);

const SvgObjectsAlignTop = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgObjectsAlignTop;
