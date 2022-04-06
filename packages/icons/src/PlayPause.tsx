import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M52.51 71.41C46.36 66.31 39.22 64 32.22 64 15.71 64 0 76.81 0 96.03v319.9C0 435.2 15.71 448 32.22 448c7.002 0 14.15-2.305 20.29-7.406l192-159.1c15.25-12.87 15.25-36.37 0-49.24L52.51 71.41zM32 415.1l-.22-318.92a.92.92 0 0 1 .291-.146l191.1 160L32 415.1zM368 64c-8.8 0-16 7.16-16 16v352c0 8.836 7.164 16 16 16s16-7.164 16-16V80c0-8.84-7.2-16-16-16zm128 0c-8.8 0-16 7.16-16 16v352c0 8.836 7.164 16 16 16s16-7.164 16-16V80c0-8.84-7.2-16-16-16z" />
  </svg>
);

const SvgPlayPause = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPlayPause;
