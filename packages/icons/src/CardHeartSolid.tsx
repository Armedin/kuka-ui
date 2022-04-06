import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M320 0c35.3 0 64 28.65 64 64v384c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V64C0 28.65 28.65 0 64 0h256zM202.2 351.7l84.4-87.4c24.5-26.2 23.1-67.3-4-90.9-24.4-20.5-60.3-16.6-82.1 5.7l-8.3 9.2-8.7-9.2c-21.9-22.3-58.2-26.2-81.8-5.7-27.49 23.6-28.8 64.7-4.33 90.9l84.73 87.4c5.3 5.7 14.5 5.7 20.1 0z" />
  </svg>
);

const SvgCardHeartSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCardHeartSolid;
