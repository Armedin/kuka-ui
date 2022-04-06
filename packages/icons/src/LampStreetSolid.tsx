import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M352 227.4V128C352 57.42 294.6 0 224.9 0H128C57.41 0 0 57.42 0 128v384h64V128c0-35.3 28.72-64 64-64h96c35.28 0 64 28.7 64 64v99.45c-82.75 13.78-147.1 78.7-159.8 161.4-1.9 14.35 9.7 27.15 24.2 27.15h335.2c14.53 0 26.16-12.81 24.19-27.16C499.1 306.1 434.8 241.2 352 227.4zM320 512c35.38 0 64.01-28.62 64.01-64h-128c-.01 35.4 28.69 64 63.99 64z" />
  </svg>
);

const SvgLampStreetSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgLampStreetSolid;
