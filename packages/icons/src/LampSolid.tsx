import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M445.5 211.4 367.1 19.38C363.2 7.625 352.4 0 340.4 0H120.6c-11.4 0-21.88 6.75-27 17.75l-90.38 192C-6.782 230.1 7.718 256 30.22 256h387.6c21.68 0 36.28-23.5 27.68-44.6zM160 288c-37.25 37.25-64.03 98.75-64.03 140.8 0 28.5 11.5 54.37 30.5 74.37 5.73 5.93 13.83 8.83 22.23 8.83h150.5c8.375 0 16.5-2.875 22.25-8.875 19-20.12 30.5-45.88 30.5-74.37 0-42-26.72-103.5-63.97-140.8H160z" />
  </svg>
);

const SvgLampSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgLampSolid;
