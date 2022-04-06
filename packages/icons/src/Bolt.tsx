import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M274.8 6.288A25.125 25.125 0 0 1 291.4 0c17.2 0 29.2 17.05 23.4 33.27L246.7 224h109.4c15.8 0 27.9 12.1 27.9 27 0 7.8-3.3 15.2-9.1 20.3L109.1 505.8c-4.5 4-10.4 6.2-16.47 6.2-17.22 0-29.24-17.1-23.45-33.3L137.3 288H25.81C11.56 288 0 276.4 0 262.2c0-7.4 3.153-14.4 8.664-19.3L274.8 6.288zm.6 42.362L42.08 256H160c5.2 0 10.1 2.5 13.1 6.8 3 4.2 3.7 9.7 2 14.6l-66.5 186.2L343.8 256H224c-5.2 0-10.1-2.5-13.1-6.8-3-5.1-3.7-9.7-2-14.6l66.5-185.95z" />
  </svg>
);

const SvgBolt = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBolt;
