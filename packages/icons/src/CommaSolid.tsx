import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" {...props}>
    <path d="M151.7 378.6 84.01 493.1c-8.885 15.18-27.4 21.85-43.99 15.83s-26.48-22.99-23.49-40.31l22.57-131.7c3.045-17.81 13.79-33.2 29.45-42.25 31.26-18.12 75.54-2.062 87.8 31.85 6.15 17.88 4.45 36.48-4.65 52.08z" />
  </svg>
);

const SvgCommaSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCommaSolid;
