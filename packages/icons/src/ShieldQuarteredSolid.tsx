import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M489.7 82.79c22 9.33 38.5 31.01 38.3 56.31-.5 100.1-41.3 281.6-213.6 364.1-16.7 7.9-36.1 7.9-52.8 0-172.35-82.5-213.11-264-214.5-364.1.77-25.3 17.22-46.98 39.2-56.31L274.7 2.913c4.1-1.905 8.7-2.921 13.3-2.92 4.7-.001 9.2 1.015 13.4 2.92L489.7 82.79zM122.1 224H288V66.77L112 141.4c.3 24.1 3.2 51.7 10.1 82.6zm331 0H288v220.8C388.5 396.2 435.5 304.5 453.1 224z" />
  </svg>
);

const SvgShieldQuarteredSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgShieldQuarteredSolid;
