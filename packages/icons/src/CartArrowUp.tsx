import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="m487.8 256 54-192H419.9l-32-32h153.9c20.3 0 36.5 20.25 30.8 40.66l-54 192.04c-3.9 13.8-16.5 23.3-30.8 23.3H158.2l14.6 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H160c-7.5 0-13.9-5.2-15.6-12.5L67.23 32H16C7.164 32 0 24.84 0 16 0 7.164 7.164 0 16 0h64c7.47 0 13.95 5.17 15.6 12.45L100 32h184.1l-32 32H107.3l42.8 192h337.7zM128 456c0-30.9 25.1-56 56-56s56 25.1 56 56-25.1 56-56 56-56-25.1-56-56zm56 24c13.3 0 24-10.7 24-24s-10.7-24-24-24-24 10.7-24 24 10.7 24 24 24zm328-24c0 30.9-25.1 56-56 56s-56-25.1-56-56 25.1-56 56-56 56 25.1 56 56zm-56-24c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zM320 86.63l-36.7 36.67c-6.2 6.3-16.4 6.3-22.6 0-6.3-6.2-6.3-16.4 0-22.6l64-64.01c6.2-6.25 16.4-6.25 22.6 0l64 64.01c6.3 6.2 6.3 16.4 0 22.6-6.2 6.3-16.4 6.3-22.6 0L352 86.63V208c0 8.8-7.2 16-16 16s-16-7.2-16-16V86.63z" />
  </svg>
);

const SvgCartArrowUp = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCartArrowUp;
