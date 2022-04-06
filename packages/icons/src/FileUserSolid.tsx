import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M256 0v128h128L256 0zm-32 128V0H48C21.49 0 0 21.49 0 48v416c0 26.5 21.49 48 48 48h288c26.51 0 48-21.49 48-48V160H256.9c-18.6 0-32.9-14.3-32.9-32zm-32 64c35.35 0 64 28.66 64 64s-28.65 64-64 64c-35.34 0-64-28.66-64-64s28.7-64 64-64zm112 240c0 8.836-7.164 16-16 16H96c-8.836 0-16-7.164-16-16 0-44.2 35.8-80 80-80h64c44.2 0 80 35.8 80 80z" />
  </svg>
);

const SvgFileUserSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFileUserSolid;
