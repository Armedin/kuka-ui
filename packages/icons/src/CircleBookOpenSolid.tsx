import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm-16 352c-11.81-6.959-50.92-25.71-101.4-3.734-5 2.134-10.6-1.366-10.6-6.366V185.5c0-5.455 3.379-10.54 8.752-12.74 21.22-8.676 41.57-13.11 59.14-12.79C215 160.3 230.1 164.9 240 168.1V352zm144-10.1c0 5.047-5.643 8.545-10.56 6.405C322.9 326.3 283.8 345 272 351.1v-183c9.902-4.061 24.99-8.614 44.1-8.935 17.5-.154 37.91 4.137 59.14 12.79C380.6 174.1 384 180.1 384 185.6v156.3z" />
  </svg>
);

const SvgCircleBookOpenSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleBookOpenSolid;
