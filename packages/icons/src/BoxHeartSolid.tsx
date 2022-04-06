import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M208 32v128H0L50.73 58.53A48 48 0 0 1 93.67 32H208zm146.3 0c18.2 0 34.8 10.27 43 26.53L448 160H240V32h114.3zM0 192h448v224c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V192zm235.3 228.7 77.3-77.3c20.5-20.5 20.5-53.7 0-74.3-20.5-20.5-53.8-20.5-74.3 0L224 283.4l-14.3-14.3c-20.5-20.5-53.8-20.5-74.3 0-20.5 20.6-20.5 53.8 0 74.3l77.3 77.3c6.2 6.2 16.4 6.2 22.6 0z" />
  </svg>
);

const SvgBoxHeartSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBoxHeartSolid;
