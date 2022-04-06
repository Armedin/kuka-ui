import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M0 256C0 114.6 114.6 0 256 0s256 114.6 256 256-114.6 256-256 256S0 397.4 0 256zm256 176c76.1 0 140.2-50 159.2-117.9 3.9-13.7-7.4-26.1-21.6-26.1H118.4c-14.2 0-25.48 12.4-21.64 26.1C115.8 382 179.9 432 256 432zm-79.6-272c-17.7 0-32 14.3-32 32s14.3 32 32 32c17.6 0 32-14.3 32-32s-14.4-32-32-32zm124.4 57.6c17.6-23.5 52.8-23.5 70.4 0 5.3 7.1 15.3 8.5 22.4 3.2 7.1-5.3 8.5-15.3 3.2-22.4-30.4-40.5-91.2-40.5-121.6 0-5.3 7.1-3.9 17.1 3.2 22.4 7.1 5.3 17.1 3.9 22.4-3.2z" />
  </svg>
);

const SvgFaceLaughWinkSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFaceLaughWinkSolid;
