import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M208 160H80c-8.84 0-16 7.2-16 16v160c0 8.8 7.16 16 16 16h118.7c-4.3 9.8-6.7 20.6-6.7 32 0 11.4 2.4 22.2 6.7 32H80c-44.18 0-80-35.8-80-80V176c0-44.2 35.82-80 80-80h128v64zm256 256H345.3c4.3-9.8 6.7-20.6 6.7-32 0-11.4-2.4-22.2-6.7-32H464c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16H336V96h128c44.2 0 80 35.8 80 80v16c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32v16c0 44.2-35.8 80-80 80zM272 96c13.3 0 24 10.7 24 24v176c0 13.3-10.7 24-24 24s-24-10.7-24-24V120c0-13.3 10.7-24 24-24zm32 288c0 17.7-14.3 32-32 32s-32-14.3-32-32 14.3-32 32-32 32 14.3 32 32z" />
  </svg>
);

const SvgBatteryExclamationSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBatteryExclamationSolid;
