import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M128 278.6 10.9 395.5c-14.5 14.62-14.5 38.29 0 52.79l52.75 52.75c14.5 14.5 38.17 14.5 52.79 0L233.4 384c29.12-29.12 29.12-76.25 0-105.4s-76.3-29.1-105.4 0zM447.1 0l-128 96 .9 62-83 83.1c6.8 4.3 13.3 9 19 14.9 5.875 5.75 10.62 12.25 14.88 19l82.22-83h61.99l95.1-128L447.1 0z" />
  </svg>
);

const SvgScrewdriverSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgScrewdriverSolid;
