import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M482.9 372.2c-85.5 126.3-260.4 185.6-381.8 98.6-121.86-87-129.72-274.1-44.22-400.4C103.1 1.486 188.6-20.65 247.5 21.1c46.7 32.2 54.6 106.6 17.7 173.5-5.9 8.6-3.9 20.2 4.5 26.2 8.3 6 19.6 4 25.5-4.5 48.2-58.4 118.9-77.5 165.1-44.3 59 41.8 68.8 131.8 22.6 200.2z" />
  </svg>
);

const SvgPompebledSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPompebledSolid;
