import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M512 142.3C512 70.25 455.56 0 371.5 0c-39.2 0-78.72 15.74-108.1 45.17-31 31.14-71.3 52.13-112.8 63.73C115.4 118.6 0 170.8 0 306.7 0 420.1 92.35 512 205.1 512c52.37 0 104.7-20.04 144.7-60.13 67.65-67.86 42.56-130 115.1-203.7l4.357-4.371C498 215.8 512 179.1 512 142.3zM319.5 264.7c0 60.74-58.63 119.3-119.1 119.3-54.51 0-72.49-43.59-72.49-72.66 0-60.75 58.64-119.3 119.1-119.3 54.49-.94 72.49 43.56 72.49 72.66z" />
  </svg>
);

const SvgAvocadoSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgAvocadoSolid;
