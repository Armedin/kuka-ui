import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M512 0c35.3 0 64 28.65 64 64v384c0 35.3-28.7 64-64 64H256c-35.3 0-64-28.7-64-64V64c0-35.35 28.7-64 64-64h256zM96 72c0-13.25 10.7-24 24-24s24 10.75 24 24v368c0 13.3-10.7 24-24 24s-24-10.7-24-24V72zM0 120c0-13.3 10.75-24 24-24s24 10.7 24 24v272c0 13.3-10.75 24-24 24S0 405.3 0 392V120z" />
  </svg>
);

const SvgRectangleVerticalHistorySolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgRectangleVerticalHistorySolid;
