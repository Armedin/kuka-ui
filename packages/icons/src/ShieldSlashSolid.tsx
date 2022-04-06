import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M319.9 512c37.26 0 102.9-58.24 117.3-72.57L81.16 160.3C96.42 398.1 272.1 512 319.9 512zm319.2-24.9c0-7.118-3.152-14.16-9.189-18.89l-134.3-105.3C533.4 303.5 560 225.5 560 127.1c0-19.41-11.69-36.89-29.5-44.28l-192-80C333.6 1.672 325.3 0 320.1 0c-5.3 0-13.6 1.672-18.5 3.703L128.9 75.68 38.81 5.109A23.96 23.96 0 0 0 24.03 0C10.2 0 0 11.29 0 24c0 7.118 3.153 14.16 9.19 18.89l591.1 463.1c5.31 4.31 10.51 6.01 14.81 6.01 14.7 0 24-11.4 24-24.9z" />
  </svg>
);

const SvgShieldSlashSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgShieldSlashSolid;
