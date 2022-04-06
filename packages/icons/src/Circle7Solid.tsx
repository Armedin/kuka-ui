import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm93.1 163.4-112 208c-4.3 8-12.6 12.6-22 12.6-3.844 0-7.719-.906-11.34-2.875-11.69-6.281-16.03-20.84-9.75-32.5L287.8 176H184c-13.2 0-24-10.7-24-24s10.8-24 24-24h144c8.438 0 16.28 4.438 20.59 11.69 4.31 7.21 4.51 16.21.51 23.71z" />
  </svg>
);

const SvgCircle7Solid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircle7Solid;
