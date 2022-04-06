import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M320 232c-13.2 0-24 10.8-24 24s10.8 24 24 24 24-10.7 24-24-10.7-24-24-24zm272-72H48c-26.4 0-48 21.6-48 48v96c0 26.4 21.6 48 48 48h544c26.4 0 48-21.6 48-48v-96c0-26.4-21.6-48-48-48zM112 320H48c-8.84 0-16-7.2-16-16v-96c0-8.8 7.16-16 16-16h64v128zm496-16c0 8.836-7.162 16-16 16H144V192h448c8.8 0 16 7.2 16 16v96zm-96-72c-13.25 0-24 10.75-24 24s10.8 24 24 24 24-10.7 24-24-10.7-24-24-24zm-96 0c-13.25 0-24 10.75-24 24s10.8 24 24 24 24-10.7 24-24-10.7-24-24-24z" />
  </svg>
);

const SvgFlute = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFlute;
