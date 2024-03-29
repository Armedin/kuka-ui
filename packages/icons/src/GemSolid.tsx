import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M378.7 32H133.3L256 182.7 378.7 32zM512 192 404.6 50.7 289.6 192H512zM107.4 50.67 0 192h222.4l-115-141.33zM244.3 474.9c3 3.3 7.3 5.1 11.7 5.1s8.653-1.828 11.67-5.062L510.6 224H1.365L244.3 474.9z" />
  </svg>
);

const SvgGemSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgGemSolid;
