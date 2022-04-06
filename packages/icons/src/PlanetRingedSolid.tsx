import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M502.9 9.049c-23.5-23.5-88.26.079-167.1 54.84-75.51-31.25-165.5-16.3-226.9 44.95-61.26 61.38-76.21 151.4-44.95 226.9-54.76 78.89-78.34 143.6-54.84 167.1 37.13 37.25 177.9-43.15 314.3-179.5S540.2 46.18 502.9 9.049zM346.5 346.5c-38.13 38.13-84.14 78.89-130.8 113.6 68.13 13.38 138.4-8.001 187.4-57.13 49.01-49.01 70.38-119.4 56.88-187.4C423.9 264.2 382.1 310.9 346.5 346.5z" />
  </svg>
);

const SvgPlanetRingedSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPlanetRingedSolid;
