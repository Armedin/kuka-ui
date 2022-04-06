import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M18.38 183.3c13.59 12.5 33.79 10.5 45.22-2L96 145.9v302c0 17.8 14.3 32.1 32 32.1s32-14.33 32-32.03V145.9l32.4 35.4c11.95 13.01 32.2 13.92 45.22 1.973 13.03-11.95 13.9-32.22 1.969-45.27L151.6 41.95c-12.12-13.26-35.06-13.26-47.19 0l-87.1 96.09C4.473 151.1 5.348 171.4 18.38 183.3zM210.4 328.7c-13.03 11.95-13.9 32.22-1.969 45.27l87.1 96.09c12.12 13.26 35.06 13.26 47.19 0l87.1-96.09c11.94-13.05 11.06-33.31-1.969-45.27-13.59-12.46-33.8-10.48-45.22 1.969L352 366.1V64.03C352 46.33 337.7 32 320 32s-32 14.33-32 32.03v302l-32.4-35.4c-12-12.93-32.2-13.83-45.2-1.93z" />
  </svg>
);

const SvgArrowUpArrowDownSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowUpArrowDownSolid;
