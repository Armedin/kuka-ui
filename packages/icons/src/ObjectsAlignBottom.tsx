import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M16 512c-8.836 0-16-7.2-16-16s7.164-16 16-16h480c8.8 0 16 7.2 16 16s-7.2 16-16 16H16zm96-128c-26.51 0-48-21.5-48-48V48c0-26.51 21.49-48 48-48h64c26.5 0 48 21.49 48 48v288c0 26.5-21.5 48-48 48h-64zm80-48V48c0-8.84-7.2-16-16-16h-64c-8.8 0-16 7.16-16 16v288c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16zm144 48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48h64c26.5 0 48 21.5 48 48v160c0 26.5-21.5 48-48 48h-64zm80-48V176c0-8.8-7.2-16-16-16h-64c-8.8 0-16 7.2-16 16v160c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16z" />
  </svg>
);

const SvgObjectsAlignBottom = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgObjectsAlignBottom;
