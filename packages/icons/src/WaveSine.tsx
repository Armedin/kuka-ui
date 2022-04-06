import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M623.3 276.6C617.5 296.1 563.8 464 463.4 464c-87.4 0-125.2-107.6-158.5-202.7C275.1 176.3 241.3 80 176.6 80 113.83 80 65.5 186.6 47.4 244.5c-3.346 11.3-14.68 12.62-19.87 10.78-8.64-2.58-13.39-11.58-10.84-19.88C22.48 215.9 76.25 48 176.6 48c87.4 0 125.2 107.6 158.5 202.7 29.8 85 63.6 181.3 128.3 181.3 62.78 0 111.1-106.7 129.2-164.5 3.309-11.17 14.7-12.57 19.87-10.78 8.63 2.48 13.43 11.48 10.83 19.88z" />
  </svg>
);

const SvgWaveSine = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgWaveSine;
