import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M216 392c0 30.9-25.1 56-56 56s-56-25.1-56-56 25.1-56 56-56 56 25.1 56 56zm0-136c0 30.9-25.1 56-56 56s-56-25.1-56-56 25.1-56 56-56 56 25.1 56 56zm-56-24c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zm-56-112c0-30.93 25.1-56 56-56s56 25.07 56 56c0 30.9-25.1 56-56 56s-56-25.1-56-56zm56 24c13.3 0 24-10.7 24-24s-10.7-24-24-24-24 10.7-24 24 10.7 24 24 24zM0 64C0 28.65 28.65 0 64 0h192c35.3 0 64 28.65 64 64v288c0 88.4-71.6 160-160 160C71.63 512 0 440.4 0 352V64zm32 0v288c0 70.7 57.31 128 128 128 70.7 0 128-57.3 128-128V64c0-17.67-14.3-32-32-32H64c-17.67 0-32 14.33-32 32z" />
  </svg>
);

const SvgTrafficLightGo = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTrafficLightGo;
