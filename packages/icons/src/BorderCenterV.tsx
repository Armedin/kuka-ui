import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M208 48c0-8.84 7.2-16 16-16s16 7.16 16 16v416c0 8.8-7.2 16-16 16s-16-7.2-16-16V48zM56 448c0 13.3-10.75 24-24 24S8 461.3 8 448s10.75-24 24-24 24 10.7 24 24zm384 0c0 13.3-10.7 24-24 24s-24-10.7-24-24 10.7-24 24-24 24 10.7 24 24zM56 352c0 13.3-10.75 24-24 24S8 365.3 8 352s10.75-24 24-24 24 10.7 24 24zm384 0c0 13.3-10.7 24-24 24s-24-10.7-24-24 10.7-24 24-24 24 10.7 24 24zm-24-216c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zM56 160c0 13.3-10.75 24-24 24S8 173.3 8 160s10.75-24 24-24 24 10.7 24 24zm360 72c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zM56 256c0 13.3-10.75 24-24 24S8 269.3 8 256s10.75-24 24-24 24 10.7 24 24zM416 40c13.3 0 24 10.75 24 24s-10.7 24-24 24-24-10.75-24-24 10.7-24 24-24zM32 40c13.25 0 24 10.75 24 24S45.25 88 32 88 8 77.25 8 64s10.75-24 24-24zm288 192c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm24-168c0 13.25-10.7 24-24 24s-24-10.75-24-24 10.7-24 24-24 24 10.75 24 24zm-24 360c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zM152 64c0 13.25-10.7 24-24 24s-24-10.75-24-24 10.7-24 24-24 24 10.75 24 24zm-24 360c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm24-168c0 13.3-10.7 24-24 24s-24-10.7-24-24 10.7-24 24-24 24 10.7 24 24z" />
  </svg>
);

const SvgBorderCenterV = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBorderCenterV;
