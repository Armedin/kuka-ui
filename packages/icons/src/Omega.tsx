import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M448 463.1c0 9.7-7.2 16.9-16 16.9H304c-8.801 0-16-7.201-16-16v-16.07c0-6.605 4.121-12.52 10.21-15.09C367.3 403.7 416 335.5 416 255.1c0-108.5-90.5-196.3-200-191.9-97.38 4-178.3 83.63-183.8 181-4.623 84.1 45.33 157.3 117.5 187.7 6.2 3.5 10.3 9.4 10.3 16v16.07c0 8.83-7.2 16.03-16 16.03H16c-8.801 0-16-7.2-16-16.9s7.199-16 16-16h93C36.37 403.47-9.6 320.2 1.7 226.9 14.08 125.5 96.58 43.8 198.2 32.5 333.5 18.32 448 123.7 448 256c0 81.63-43.75 152.9-109 191.1h93c8.8 0 16 8.1 16 16z" />
  </svg>
);

const SvgOmega = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgOmega;
