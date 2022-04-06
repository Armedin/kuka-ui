import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M392.5 89.39C297.57-10.17 179.4 31.28 84 126.23c-95.42 94.96-112 232.4-37.02 307 74.98 74.61 213.1 58.12 308.5-36.84 95.42-94.89 132.02-208.29 37.02-307zM374.9 214.9c-18.18 18.18-57.49 8.355-87.79-21.95-30.3-30.3-40.13-69.61-21.95-87.79 18.18-18.18 57.49-8.354 87.79 21.95 30.25 30.29 40.15 69.59 21.95 87.79z" />
  </svg>
);

const SvgOliveSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgOliveSolid;
