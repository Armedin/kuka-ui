import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm106.5 323.9c0 6.473-3.889 12.3-9.877 14.78a15.997 15.997 0 0 1-17.44-3.469l-45.25-45.25L222 357.9c-12.5 12.5-32.72 12.46-45.21-.042l-22.63-22.62c-12.5-12.5-12.54-32.72-.041-45.21l67.92-67.92L176.8 176.8c-4.6-4.6-6-11.5-3.5-17.4a15.988 15.988 0 0 1 14.78-9.875h158.4c8.836 0 15.1 7.164 15.1 16V323.9z" />
  </svg>
);

const SvgCircleUpRightSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleUpRightSolid;
