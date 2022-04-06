import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M448 416c0 35.3-28.7 64-64 64H32c-8.84 0-16-7.2-16-16s7.16-16 16-16h352c17.7 0 32-14.3 32-32V64c0-8.84 7.2-16 16-16s16 7.16 16 16v352zM296 64c0-13.25 10.7-24 24-24s24 10.75 24 24-10.7 24-24 24-24-10.75-24-24zm-192 0c0-13.25 10.7-24 24-24s24 10.75 24 24-10.7 24-24 24-24-10.75-24-24zm120-24c13.3 0 24 10.75 24 24s-10.7 24-24 24-24-10.75-24-24 10.7-24 24-24zM8 64c0-13.25 10.75-24 24-24s24 10.75 24 24-10.75 24-24 24S8 77.25 8 64zm24 168c13.25 0 24 10.7 24 24s-10.75 24-24 24-24-10.7-24-24 10.75-24 24-24zM8 160c0-13.3 10.75-24 24-24s24 10.7 24 24-10.75 24-24 24-24-10.7-24-24zm24 168c13.25 0 24 10.7 24 24s-10.75 24-24 24-24-10.7-24-24 10.75-24 24-24z" />
  </svg>
);

const SvgBorderBottomRight = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBorderBottomRight;
