import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M207.1 512a32.017 32.017 0 0 1-28.61-17.68L76.22 288H32c-17.67 0-32-14.31-32-32s14.33-31.1 32-31.1l64-.005c12.12 0 23.2 6.85 28.62 17.69l73.31 146.6 91.02-364.1C292.5 10.01 305.3.01 320 .01l224 .005c17.67 0 32 14.31 32 31.1s-14.33 32-32 32H345L239 487.8c-3.25 13-14.25 22.59-27.56 24.06-1.14-.76-2.24.14-4.34.14z" />
  </svg>
);

const SvgSquareRootSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquareRootSolid;
