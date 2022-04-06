import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M416 320h-96c-17.6 0-32 14.4-32 32v96c0 17.6 14.4 32 32 32h96c17.6 0 32-14.4 32-32v-96c0-17.6-14.4-32-32-32zm64-288H320c-17.67 0-32 14.33-32 32v160c0 17.67 14.33 32 32 32h160c17.67 0 32-14.33 32-32V64c0-17.67-14.3-32-32-32zm-328.4 9.95c-12.12-13.26-35.06-13.26-47.19 0l-87.1 96.09C4.473 151.1 5.348 171.4 18.38 183.3c13.02 11.95 33.27 11.04 45.22-1.973L96 145.9v302c0 17.8 14.3 32.1 32 32.1s32-14.33 32-32.03V145.9l32.4 35.4c6.312 6.883 14.94 10.39 23.61 10.39 7.719 0 15.47-2.785 21.61-8.414 13.03-11.95 13.9-32.22 1.969-45.27L151.6 41.95z" />
  </svg>
);

const SvgArrowUpBigSmallSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowUpBigSmallSolid;
