import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M0 256C0 114.6 114.6 0 256 0s256 114.6 256 256-114.6 256-256 256S0 397.4 0 256zm353.6-97.5c-6.3-6.4-15.8-8.2-24.3-4.7l-196 84c-9.5 4.1-15 14.5-12.9 24.6 2.1 10.2 11.2 17.6 20.7 17.6H232v90c0 10.4 7.4 19.5 17.6 21.6 1.5.3 3 .4 3.5.4 9.7 0 17.6-5.2 21.1-13.3l84-196c3.6-8.4.9-17.9-4.6-24.2z" />
  </svg>
);

const SvgCircleLocationArrowSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleLocationArrowSolid;
