import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M80 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm368 0H224c-35.4 0-64 28.64-64 64v320c0 35.36 28.64 64 64 64h224c35.36 0 64-28.64 64-64V96c0-35.36-28.6-64-64-64zM272 416c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm160 0h-64c-8.832 0-16-7.168-16-16s7.168-16 16-16h64c8.832 0 16 7.168 16 16s-7.2 16-16 16zm0-64h-64c-8.832 0-16-7.168-16-16s7.168-16 16-16h64c8.832 0 16 7.168 16 16s-7.2 16-16 16zm16-96H224V96h224v160z" />
  </svg>
);

const SvgPhoneIntercomSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPhoneIntercomSolid;
