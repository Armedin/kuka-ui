import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M240 416c0-9.148 2.697-17.62 7.143-24.89C224.9 386.9 208 367.5 208 344c0-17.38 9.33-32.46 23.17-40.89C208.9 298.1 192 279.5 192 256c0-12.35 4.797-23.49 12.46-32H40c-22.09 0-40-17.9-40-40s17.91-40 40-40l295.1-.006c8.836 0 15.1-7.17 15.1-16.01 0-8.838-7.164-16-16-16h-45.47L314.5 82c9.1-11.37 22.9-18 37.5-18h48c10.38 0 20.48 3.375 28.8 9.594l25.59 19.19C490.5 119.8 512 162.9 512 208v112c0 3.318-.338 6.557-.979 9.686C505.9 404.5 444.1 464 368 464h-80c-26.5 0-48-21.5-48-48z" />
  </svg>
);

const SvgHandBackPointLeftSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgHandBackPointLeftSolid;
