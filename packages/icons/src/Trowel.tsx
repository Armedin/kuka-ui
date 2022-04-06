import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M491.8 20.18c26.9 26.92 26.9 70.55 0 97.42l-95.4 95.5c-14.6 14.5-38.2 14.5-52.8 0l-11-11.1-102 101.1 75.6 76.4c12.6 12.7 7.5 34.1-9.4 39.8L36.24 506.1c-18.76 6.3-36.611-11.6-30.357-30.3L92.73 215.2c5.64-16.9 27.17-22 39.77-9.4l75.5 75.6 101.1-102-10.2-11c-14.5-14.6-14.5-38.2 0-52.8l95.5-95.42c26.9-26.908 70.5-26.908 97.4 0zM321.6 138.2c-2.1 2.1-2.1 5.5 0 7.6l44.6 44.6c2.1 2.1 5.5 2.1 7.6 0l95.4-95.39c14.4-14.41 14.4-37.78 0-52.2-14.4-14.41-37.8-14.41-53.1 0l-94.5 95.39zM274.4 393 118.1 237.6 41.3 470.7 274.4 393z" />
  </svg>
);

const SvgTrowel = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTrowel;
