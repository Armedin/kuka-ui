import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256-.008c4.7 0 9.2 1.016 13.4 2.921L457.7 82.79c22 9.33 38.5 31.01 38.3 56.31-.5 100.1-41.3 281.6-213.6 364.1-16.7 7.9-36.1 7.9-52.8 0-172.35-82.5-213.11-264-214.5-364.1.77-25.3 17.22-46.98 39.2-56.31L242.7 2.913c4.1-1.905 8.7-2.921 13.3-2.92zm0 444.808C393.1 378 431.1 230.1 432 141.4L256 66.77V444.8z" />
  </svg>
);

const SvgShieldHalvedSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgShieldHalvedSolid;