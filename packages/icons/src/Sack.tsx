import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M0 416c0-142.6 91.2-232.3 152.6-277.5 9.7-7.1 18.7-13.1 26.4-18.1l-57.1-82.78C110.1 21.7 122.4 0 141.7 0h228.6c19.3 0 30.7 21.7 19.8 37.62l-58 82.78c8.6 5 17.6 11 27.3 18.1C420.8 183.7 512 273.4 512 416c0 53-43 96-96 96H96c-53.02 0-96-43-96-96zm310.5-272h-109l-5.2 3.4C141.4 182.5 32 268.3 32 416c0 35.3 28.65 64 64 64h320c35.3 0 64-28.7 64-64 0-147.7-109.4-233.5-164.3-268.6l-5.2-3.4zm44.6-112H156.9l55.2 80h87.8l55.2-80z" />
  </svg>
);

const SvgSack = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSack;
