import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M512 256c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zM240 479.4V32.56C123.8 40.77 32 137.7 32 256s91.8 215.2 208 223.4zm32-446.84V479.4c116.2-8.2 208-105.1 208-223.4 0-118.3-91.8-215.23-208-223.44z" />
  </svg>
);

const SvgCircleHalfStroke = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleHalfStroke;
