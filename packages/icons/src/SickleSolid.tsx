import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M129.9 308.7c-6.2-6.2-16.5-6.2-22.7.1l-22.5 22.5c-6.25 6.25-6.25 16.5 0 22.75l2.625 2.75-77.952 78c-12.5 12.5-12.5 32.76 0 45.26l22.62 22.62c12.5 12.5 32.76 12.5 45.26 0l78.07-78.13 2.75 2.75c6.25 6.25 16.38 6.25 22.63 0l22.63-22.62c6.252-6.251 6.248-16.39-.009-22.63L129.9 308.7zM318 0c-97.9 0-168.9 68.51-186.1 149.9-13.9 62.44 10.83 127.2 56.94 172.3L220.9 352l35.75-34.99C217.8 253.5 232.5 167.3 304 123.1c43.58-26.95 100.7-28.68 145.7-3.957 18.7 10.14 34.99 24.11 47.75 40.93 5.179 6.8 16.04 1.854 14.4-6.429C500.1 99.65 447.4 0 318 0z" />
  </svg>
);

const SvgSickleSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSickleSolid;
