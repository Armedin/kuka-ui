import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M342.4 32c25.3 0 48.2 14.9 58.5 38.01l41.6 93.59c3.6 8.2 5.5 17 5.5 26V416c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V189.6c0-9 1.879-17.8 5.516-26L47.11 70.01C57.38 46.89 80.3 32 105.6 32h236.8zm0 32H240v96h165.9l-34.2-77c-5.2-11.55-16.6-19-29.3-19zM416 192H32v224c0 17.7 14.33 32 32 32h320c17.7 0 32-14.3 32-32V192zM42.13 160H208V64H105.6c-12.65 0-24.11 7.45-29.25 19l-34.22 77z" />
  </svg>
);

const SvgBox = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBox;
