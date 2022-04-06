import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M256 0v128h128L256 0zm-32 128V0H48C21.49 0 0 21.49 0 48v416c0 26.5 21.49 48 48 48h288c26.51 0 48-21.49 48-48V160H256.9c-18.6 0-32.9-14.3-32.9-32zm60.7 214.3-82.99 85.56c-5.387 5.504-13.95 5.504-19.34 0L99.38 342.3c-24.11-25.02-22.64-66.17 4.285-89.19 23.5-20.02 58.39-16.39 79.81 5.754l8.445 8.754 8.445-8.754c21.55-22.14 56.55-25.77 79.93-5.754C307.3 276.1 308.8 317.3 284.7 342.3z" />
  </svg>
);

const SvgFileHeartSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFileHeartSolid;
