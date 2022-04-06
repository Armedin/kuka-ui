import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 0H64C28.65 0 0 28.65 0 64v384c0 35.35 28.65 63.1 64 63.1h320c35.35 0 64-28.65 64-63.1V64c0-35.35-28.7-64-64-64zm-96 448c0 8.837-7.163 16-15.1 16h-97.8c-8.837 0-15.1-7.163-15.1-16s7.163-16 15.1-16h96c9.7 0 16.9 7.2 16.9 16zm96-64H64V64h320v320z" />
  </svg>
);

const SvgTabletScreenSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTabletScreenSolid;
