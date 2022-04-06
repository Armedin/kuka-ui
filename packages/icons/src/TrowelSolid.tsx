import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M343.9 213.4 245.3 312l65.3 65.4c7.9 7.9 11.2 19.4 8.5 30.2-2.7 10.9-10.9 19.6-21.6 22.9l-255.95 80c-11.37 3.6-23.76.5-32.177-7.9-8.416-8.4-11.466-20.8-7.915-32.1l80.002-256a32.095 32.095 0 0 1 22.94-21.6c10.8-2.6 22.3.6 30.2 8.5l65.4 65.3 98.6-98.6c-14.2-14.6-14.1-38 .3-52.5l95.5-95.42c26.9-26.908 70.5-26.908 97.4 0 26.9 26.92 26.9 70.55 0 97.42l-95.4 95.5c-14.5 14.4-37.9 14.5-52.5.3z" />
  </svg>
);

const SvgTrowelSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTrowelSolid;
