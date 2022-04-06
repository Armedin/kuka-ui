import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M446.8 512H65.17c-28.5 0-43.75-34.5-24.75-56.38L130.3 352H94.29c-25.62 0-39.5-29.25-23.25-48.5L166 192h-44.7c-21.37 0-32.1-22.5-19.37-37.25l134.9-146.5c9.999-10.1 28.5-10.1 38.5 0l134.1 146.5C423.8 169.5 412.3 192 390.9 192h-44.75l94.87 111.5c16.28 19.3 2.38 48.5-23.22 48.5h-36l89.87 103.6c18.83 21.8 3.73 56.4-24.87 56.4z" />
  </svg>
);

const SvgTreeLargeSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTreeLargeSolid;
