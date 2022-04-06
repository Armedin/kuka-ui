import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M352 96h-32V80c0-8.84-7.2-16-16-16h-32c-8.8 0-16 7.16-16 16v16h-32V80c0-8.84-7.2-16-16-16h-32c-8.8 0-16 7.16-16 16v16h-48V23.1C112 10.74 101.3 0 88 0S64 10.74 64 23.1V96H32c-17.6 0-32 14.4-32 32v178.7c0 8.484 3.373 16.62 9.371 22.62L32 352v112c0 26.5 21.49 48 48 48h224c26.51 0 48-21.49 48-48V352l22.63-22.63c5.97-5.97 9.37-14.17 9.37-22.67V128c0-17.6-14.4-32-32-32zm-64 216c0 4.4-3.6 8-8 8H104c-4.37 0-8-3.6-8-8v-16c0-4.4 3.63-8 8-8h176c4.4 0 8 3.6 8 8v16zm0-64c0 4.4-3.6 8-8 8H104c-4.37 0-8-3.6-8-8v-16c0-4.4 3.63-8 8-8h176c4.4 0 8 3.6 8 8v16zm0-64c0 4.4-3.6 8-8 8H104c-4.37 0-8-3.6-8-8v-16c0-4.4 3.63-8 8-8h176c4.4 0 8 3.6 8 8v16z" />
  </svg>
);

const SvgWalkieTalkieSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgWalkieTalkieSolid;
