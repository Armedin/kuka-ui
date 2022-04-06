import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M480 416c17.7 0 32 14.3 32 32s-14.3 32-32 32H150.6c-16.9 0-33.2-6.7-45.2-18.7l-80.03-80c-24.991-25-24.991-65.6 0-90.6L258.7 57.37c25-24.99 65.6-24.99 90.6 0L486.6 194.7c25 25 25 65.6 0 90.6L355.9 416H480zm-214.6 0 67.3-67.3-137.4-137.4L70.63 336l79.97 80h114.8z" />
  </svg>
);

const SvgEraserSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgEraserSolid;
