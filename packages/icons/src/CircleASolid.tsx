import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm106.1 365.8a23.96 23.96 0 0 1-10.05 2.229 23.99 23.99 0 0 1-21.81-14l-12.03-26.18H193.8l-12.03 26.18c-5.576 12.09-19.76 17.36-31.86 11.77-12.03-5.559-17.28-19.91-11.73-31.99l95.99-208.1c7.842-17.08 35.75-17.08 43.59 0l95.99 208.1c5.55 12.091.35 26.391-11.65 31.991zm-147-86.2h80.05L256 192.5l-40.9 87.1z" />
  </svg>
);

const SvgCircleASolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleASolid;
