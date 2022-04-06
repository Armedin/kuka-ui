import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M0 256C0 114.6 114.6 0 256 0s256 114.6 256 256-114.6 256-256 256S0 397.4 0 256zm160-128c-8.8 0-16 7.2-16 16s7.2 16 16 16h192c8.8 0 16-7.2 16-16s-7.2-16-16-16h-41.4l-11.3-11.3c-3-3-7.1-4.7-11.3-4.7h-64c-4.2 0-8.3 1.7-11.3 4.7L201.4 128H160zm0 64 13.6 162.7c1.3 16.5 15.2 29.3 31.8 29.3h101.2c16.6 0 30.5-12.8 31.8-29.3L352 192H160z" />
  </svg>
);

const SvgCircleTrashSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleTrashSolid;
