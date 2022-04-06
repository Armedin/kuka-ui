import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 0H64C28.65 0 0 28.65 0 64v384c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V64c0-35.35-28.7-64-64-64zm-96 447.1c0 9.7-7.2 16.9-16 16.9h-96.9c-7.9 0-15.1-7.2-15.1-16s7.2-16 15.1-16h96c9.7 0 16.9 7.2 16.9 15.1z" />
  </svg>
);

const SvgTabletSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTabletSolid;
