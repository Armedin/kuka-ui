import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M512 24c0-13.71-11.2-24-24-24a23.93 23.93 0 0 0-16.97 7.031L422.4 55.62c-22.49-15.73-48.69-23.25-74.98-23.25-36.48 0-73.17 14.54-100.5 41.99C176.3 145.3 0 138.6 0 319.5 0 425.8 86.58 512 192.2 512c181.5 0 171.3-173.1 248.5-251.4 26.03-26.11 38.94-60.2 38.94-94.35 0-26.69-7.883-53.41-23.55-76.39l48.87-48.87C509.7 36.28 512 30.14 512 24zM192 448c-8.844 0-16-7.156-16-16s7.2-16 16-16c52.94 0 96-43.06 96-96 0-8.844 7.156-16 16-16s16 7.2 16 16c0 70.6-57.4 128-128 128z" />
  </svg>
);

const SvgPearSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPearSolid;
