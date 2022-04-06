import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="m313.4 89.37 45.25 45.26c12.5 12.5 12.5 32.76 0 45.25l-129.6 129.6 67.88 67.88a32.005 32.005 0 0 1 6.938 34.87C298.9 424.2 287.2 432 274.3 432H47.1a31.91 31.91 0 0 1-22.63-9.369c-5.789-5.791-9.371-13.79-9.371-22.63L16 173.7c0-12.95 7.789-24.61 19.75-29.57 11.96-4.93 25.73-3.03 34.87 6.97l67.88 67.88 129.6-129.6c12.5-12.51 32.8-12.5 45.3-.01z" />
  </svg>
);

const SvgDownLeftSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgDownLeftSolid;
