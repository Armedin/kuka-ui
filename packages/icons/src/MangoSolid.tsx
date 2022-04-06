import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M509.4 253.1c-11.6-76.7-69-133-141.4-150.7V63.56C385.5 83.31 411.5 96 443 96h51.05c11.19 0 19.79-9.357 17.55-19.28C501.8 32.94 458.1 0 407.7 0H344c-13.2 0-24 10.75-24 24l-.075 72.01c-.073 0 .072 0 0 0-171.5.16-208.7 177.9-301.7 268.4C6.512 375.8 0 391.5 0 407.9c0 25.1 15.28 47.62 38.73 56.57C88.42 483.4 181.1 512 287.1 512c136.1 0 243.3-119.7 222.3-258.9zM304 432c-8.844 0-16-7.156-16-16s7.156-16 16-16c52.94 0 96-43.06 96-96 0-8.8 7.2-16 16-16s16 7.156 16 16c0 70.6-57.4 128-128 128z" />
  </svg>
);

const SvgMangoSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMangoSolid;
