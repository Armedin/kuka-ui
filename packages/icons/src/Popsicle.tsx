import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M273.1 46.86C303.1 76.87 320 117.6 320 160v192c0 8.5-3.4 16.6-9.4 22.6S296.5 384 288 384H176v112c0 4.2-1.7 8.3-4.7 11.3s-7.1 4.7-11.3 4.7c-4.2 0-8.3-1.7-11.3-4.7s-4.7-7.1-4.7-11.3V384H32c-8.49 0-16.63-3.4-22.628-9.4C3.371 368.6 0 360.5 0 352V160c0-42.4 16.86-83.13 46.86-113.14C76.87 16.86 117.6 0 160 0c42.4 0 83.1 16.86 113.1 46.86zM288 160c0-33.9-13.5-66.5-37.5-90.51-24-24-56.6-37.49-90.5-37.49S93.5 45.49 69.49 69.49C45.49 93.5 32 126.1 32 160v192h112V192c0-4.2 1.7-8.3 4.7-11.3s7.1-4.7 11.3-4.7c4.2 0 8.3 1.7 11.3 4.7s4.7 7.1 4.7 11.3v160h112V160z" />
  </svg>
);

const SvgPopsicle = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPopsicle;
