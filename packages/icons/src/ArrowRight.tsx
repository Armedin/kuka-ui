import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="m443.7 266.8-165.9 176c-3.3 3.5-8.7 5.2-12.3 5.2-3.986 0-7.988-1.375-11.16-4.156-6.773-5.938-7.275-16.06-1.118-22.59L393.9 272H16.59C7.419 272 0 264.845 0 256.9S7.421 240 16.59 240h377.3L253.19 90.7c-6.157-6.531-5.655-16.66 1.118-22.59 6.789-5.906 17.27-5.469 23.45 1.094l165.9 176a15.732 15.732 0 0 1 .042 21.596z" />
  </svg>
);

const SvgArrowRight = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowRight;
