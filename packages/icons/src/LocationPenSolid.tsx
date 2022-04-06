import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M168.3 499.2C116.1 435 0 279.4 0 192 0 85.96 85.96 0 192 0c106 0 192 85.96 192 192 0 87.4-117 243-168.3 307.2-12.3 15.3-35.1 15.3-47.4 0zM276.8 107c-14.7-14.69-38.6-14.69-53.3 0l-14.9 14.1 53.3 54.2 14.9-14.9c14.7-14.8 14.7-38.6 0-53.4zM105.6 231.4 96.48 268c-1.36 5.5.23 11.3 4.22 15.2 4 4 9.7 5.6 15.2 4.2l36.6-9.1c5.6-1.4 10.8-5.2 14.9-8.4l71.9-72-54.2-53.3-71 71.9c-5 4.1-7.1 9.3-8.5 14.9z" />
  </svg>
);

const SvgLocationPenSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgLocationPenSolid;
