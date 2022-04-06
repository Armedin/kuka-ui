import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M9.375 412.1c-12.5 12.5-12.5 32.75 0 45.25l45.25 45.25c12.5 12.5 32.75 12.5 45.25 0l79.12-79.12-90.5-90.5-79.12 79.12zm96.125-84.8 79.25 79.25 22.62-22.62-79.27-79.33-22.6 22.7zm89.6-90.5a7.922 7.922 0 0 0-11.25 0l-10.45 11.3a7.922 7.922 0 0 0 0 11.25l79.25 79.25a7.922 7.922 0 0 0 11.25 0l11.38-11.38a7.922 7.922 0 0 0 0-11.25L195.1 236.8zm-55.6 56.6 79.12 79.12 22.62-22.62-79.14-79.1-22.6 22.6zM504.1 7.02c-9.125-9.125-23.87-9.375-33.25-.625L225.6 232.4l53.1 53.1L503.8 39.4c10.6-8.51 10.3-23.26.3-32.38z" />
  </svg>
);

const SvgSwordLaserSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSwordLaserSolid;
