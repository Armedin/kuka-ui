import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M448 256c0 143.4-118.6 222.3-225 222.3C90.7 478.3.9 372.1.9 255.9.9 131.5 101.8 32 224 32c84.84 0 167.8 55.28 167.8 88.2 0 18.28-14.95 32-32 32-31.04 0-46.79-56.16-135.8-56.16-87.66 0-159.1 70.66-159.1 159.8 0 34.81 27.19 158.8 159.1 158.8 79.45 0 144.6-55.1 158.1-126.7H248c-17.67 0-32-14.33-32-32s14.33-31.1 32-31.1h168c17.7-.84 32 13.46 32 31.16z" />
  </svg>
);

const SvgGSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgGSolid;
