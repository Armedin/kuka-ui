import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M288 240v-96c0-26.5 21.5-48 48-48h64c26.5 0 48 21.5 48 48v96h48c8.8 0 16 7.2 16 16s-7.2 16-16 16h-48v96c0 26.5-21.5 48-48 48h-64c-26.5 0-48-21.5-48-48v-96h-64v160c0 26.5-21.5 48-48 48h-64c-26.51 0-48-21.5-48-48V272H16c-8.836 0-16-7.2-16-16s7.164-16 16-16h48V80c0-26.51 21.49-48 48-48h64c26.5 0 48 21.49 48 48v160h64zM176 64h-64c-8.8 0-16 7.16-16 16v352c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16V80c0-8.84-7.2-16-16-16zm144 304c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16V144c0-8.8-7.2-16-16-16h-64c-8.8 0-16 7.2-16 16v224z" />
  </svg>
);

const SvgObjectsAlignCenterVertical = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgObjectsAlignCenterVertical;
