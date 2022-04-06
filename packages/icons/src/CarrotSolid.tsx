import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M298.2 156.6c-52.7-25.7-114.5-10.5-151.1 32.8l55.27 55.31a15.94 15.94 0 0 1 0 22.58c-3.127 3-7.266 4.605-11.39 4.605s-8.068-1.605-11.19-4.605L130.3 217 2.2 479.8c-2.875 6-3 13.25 0 19.63 5.5 11.12 19 15.75 30 10.38l133.6-65.25-49.1-49.26c-6.377-6.125-6.377-16.38 0-22.5 6.25-6.25 16.37-6.25 22.5 0l56.98 56.98 102-49.89c24-11.63 44.5-31.26 57.13-57.13C385.5 261.1 359.9 186.8 298.2 156.6zm92-34.8C409.7 81 399.7 32.88 359.1 0c-50.25 41.75-52.51 107.5-7.875 151.9l8 8C404.5 204.5 470.4 202.3 512 152c-32.9-39.7-81.9-49.7-121.8-30.2z" />
  </svg>
);

const SvgCarrotSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCarrotSolid;
