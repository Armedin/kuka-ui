import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm104.6 319.4-91.53 91.25C265.6 414 260.9 416 256 416s-9.5-1.1-13-5.375L151.4 319.4c-11.5-11.5-3.3-31.4 13.2-31.4h182.9c16.5 0 24.6 19.9 13.1 31.4zM347.5 224H164.6c-16.5 0-24.69-19.88-13.19-31.38L243 101.4c3.5-3.4 8.1-6.3 13-6.3s9.594 2 13.09 5.375l91.53 91.25C372.1 204.1 364 224 347.5 224z" />
  </svg>
);

const SvgCircleSortSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleSortSolid;
