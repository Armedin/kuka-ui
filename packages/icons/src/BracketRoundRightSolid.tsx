import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" {...props}>
    <path d="M37.53 465.8c-9.844-14.59-5.969-34.47 8.594-44.37 3.344-2.281 81.87-57.09 81.87-165.5 0-108.2-78.37-163.1-81.87-165.5C31.53 80.73 27.6 60.92 37.38 46.26c9.81-14.72 29.65-18.69 44.37-8.87C86.25 40.39 192 112.5 192 256S86.3 471.6 81.8 474.6c-5.49 3.7-11.64 5.4-17.7 5.4-10.28 0-20.38-5-26.57-14.2z" />
  </svg>
);

const SvgBracketRoundRightSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBracketRoundRightSolid;
