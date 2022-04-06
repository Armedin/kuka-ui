import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M186.6 51.36c-7.188-25.27-45-26.36-53.13 0C90.94 189.3 0 226.9 0 324.1 0 410.18 71.56 480 160 480s160-69.78 160-155.9c0-97.7-90.7-134.1-133.4-272.74zM80 264c0-13.31 10.69-23.1 24-23.1s24 9.8 24 23.1-10.7 24-24 24-24-10.7-24-24zm43.3 115.3c-3.1 3.1-7.2 3.8-11.3 3.8s-8.188-1.562-11.31-4.688c-6.25-6.25-6.25-16.37 0-22.62l96-95.1c6.25-6.25 16.38-6.25 22.62 0 6.25 6.25 6.25 16.37 0 22.62L123.3 379.3zm92.7 19.8c-13.31 0-24-10.69-24-23.1 0-13.31 10.69-23.1 24-23.1s24 10.69 24 23.1c0 13.3-10.7 23.1-24 23.1z" />
  </svg>
);

const SvgDropletPercentSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgDropletPercentSolid;
