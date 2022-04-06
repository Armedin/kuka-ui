import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M404.1 171.9c-30.56-9.289-54.71-33.44-64-64-22.41-6.814-41.14-21.79-53.32-41.26C190.3 144.5 124.7 176.7 100.8 186.1 31.93 214.6 0 275.1 0 337.4c0 141.1 129.2 174.7 172.6 174.7 62.28 0 112.1-19.21 213.2-172.9 23.94-36.67 44.8-73.65 64.42-110.8-21.92-12.1-38.72-32.2-46.12-56.5zM512 24c0-13.71-11.2-24-24-24a23.93 23.93 0 0 0-16.97 7.031l-14.04 14.04A63.698 63.698 0 0 0 432 16H304c0 35.35 28.65 64 64 64 0 35.35 28.65 64 64 64 0 35.35 28.65 64 64 64V80c0-8.871-1.812-17.31-5.074-24.99l14.04-14.04C509.7 36.28 512 30.14 512 24z" />
  </svg>
);

const SvgEggplantSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgEggplantSolid;
