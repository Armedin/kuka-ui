import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M568.2 336.3c-13.12-17.81-38.14-21.66-55.93-8.469l-119.7 88.17h-120.6c-8.748 0-15.1-7.25-15.1-15.99 0-8.75 7.25-16 15.1-16h78.25c15.1 0 30.75-10.88 33.37-26.62 3.25-20-12.12-37.38-31.62-37.38H191.1c-26.1 0-53.12 9.25-74.12 26.25l-46.5 37.74-55.38-.901C7.251 383.1 0 391.3 0 400v95.98C0 504.8 7.251 512 15.1 512h346.1c22.03 0 43.92-7.188 61.7-20.27L558 392.21c19.5-13.11 23.3-38.11 10.2-55.91zM160 176h64v64c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-64h64c8.836 0 16-7.164 16-16V96c0-8.838-7.164-16-16-16h-64V16c0-8.838-7.2-16-16-16h-64c-8.8 0-16 7.162-16 16v64h-64c-8.8 0-16 7.16-16 16v64c0 8.8 7.2 16 16 16z" />
  </svg>
);

const SvgHandHoldingMedicalSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgHandHoldingMedicalSolid;
