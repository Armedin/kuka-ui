import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M80 0c7.47 0 13.95 5.17 15.6 12.45L100 32h441.8c20.3 0 36.5 20.25 30.8 40.66l-54 192.04c-3.9 13.8-16.5 23.3-30.8 23.3H158.2l14.6 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H160c-7.5 0-13.9-5.2-15.6-12.5L67.23 32H16C7.164 32 0 24.84 0 16 0 7.164 7.164 0 16 0h64zm27.3 64 42.8 192h337.7l54-192H107.3zM128 456c0-30.9 25.1-56 56-56s56 25.1 56 56-25.1 56-56 56-56-25.1-56-56zm56 24c13.3 0 24-10.7 24-24s-10.7-24-24-24-24 10.7-24 24 10.7 24 24 24zm328-24c0 30.9-25.1 56-56 56s-56-25.1-56-56 25.1-56 56-56 56 25.1 56 56zm-56-24c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24z" />
  </svg>
);

const SvgCartShopping = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCartShopping;
