import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M0 64C0 28.65 28.65 0 64 0h256c35.3 0 64 28.65 64 64v384c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V64zm80 200c0 30.9 25.1 56 56 56 15.7 0 29.8-6.4 40-16.8V336h-16c-8.8 0-16 7.2-16 16s7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16h-16v-32.8c10.2 10.4 24.3 16.8 40 16.8 30.9 0 56-25.1 56-56 0-28.9-21.9-52.7-50.1-55.7 1.4-5.2 2.1-10.7 2.1-16.3 0-35.3-28.7-64-64-64s-64 28.7-64 64c0 5.6.7 11.1 2.1 16.3-28.2 3-50.1 26.8-50.1 55.7z" />
  </svg>
);

const SvgCardClubSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCardClubSolid;
