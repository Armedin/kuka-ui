import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M208 32v128H0L50.73 58.53A48 48 0 0 1 93.67 32H208zm146.3 0c18.2 0 34.8 10.27 43 26.53L448 160H240V32h114.3zM0 192h448v224c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V192zm320.1 104.1c10.2-8.5 10.2-23.7 0-33.1-8.5-9.3-23.7-9.3-33.1 0l-95 95.1-39.9-39.1c-8.5-9.3-23.7-9.3-33.1 0-9.3 9.4-9.3 24.6 0 33.1l56 56c9.4 10.2 24.6 10.2 33.1 0l112-112z" />
  </svg>
);

const SvgBoxCheckSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBoxCheckSolid;
