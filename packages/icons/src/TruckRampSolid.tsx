import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M528 512c-61 0-110.5-48.7-112-109.3L48.41 502.9c-17.05 4.6-34.64-5.4-39.284-22.5-4.646-17 5.414-34.6 22.464-39.3L352 353.8V64c0-35.35 28.7-64 64-64h224v400c0 61.9-50.1 112-112 112zm0-64c26.5 0 48-21.5 48-48s-21.5-48-48-48-48 21.5-48 48 21.5 48 48 48z" />
  </svg>
);

const SvgTruckRampSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTruckRampSolid;
