import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M350.3 37.28c23.3 4.02 49.3 3.16 82.8-3.17 23-4.07 44.5 10.97 47.8 33.59 14.2 102.9 14.1 190.2-17.8 264.1-32.5 75-94.6 130.9-190.3 175.7-10.2 4.8-22.1 5-32.5.6-98.4-41.4-160.96-97.5-193.01-173.9-31.37-74.7-31.3-163.8-16.2-266.52 3.32-22.64 24.81-37.64 46.93-33.57 34.38 6.33 60.38 7.19 83.68 3.17 23.1-4.01 45.9-13.21 73.4-29.972 12.8-7.822 29-7.822 41.8 0 27.5 16.762 50.3 25.962 73.4 29.972zM85.25 192c.43 45.5 7.08 84.2 21.05 117.4 22.9 54.6 67.5 99.3 149 135.5 80.6-39.5 125.6-84.4 149.1-138.5 14-32.6 21-70.1 21.9-115.3l-341.05.9z" />
  </svg>
);

const SvgRouteInterstateSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgRouteInterstateSolid;
