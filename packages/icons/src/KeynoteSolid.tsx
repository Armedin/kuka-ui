import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M336 448h-48v-64h-64v64h-48.9c-25.6 0-47.1 21.5-47.1 47.1 0 9.7 7.2 16.9 16 16.9h224c8.837 0 16-7.163 16-16 0-26.5-21.5-48-48-48zm172.6-166.8-51.7-103.4c-5.5-10.9-16.5-17.8-28.7-17.8H144c0-37.62 26.25-69 62.62-77.5C215.2 90.75 227 96 240 96h64c26.5 0 48-21.5 48-48S330.5 0 304 0h-64c-22.4 0-41 15.38-46.2 36C137.8 49.75 96 99.88 96 160H83.75c-12.13 0-23.13 6.9-28.63 17.8L3.375 281.2C1.125 285.6 0 290.6 0 295.5V320c0 17.62 14.38 32 32 32h448c17.62 0 32-14.38 32-32v-24.5c0-4.9-1.1-9.7-3.4-14.3z" />
  </svg>
);

const SvgKeynoteSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgKeynoteSolid;
