import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="m382.7 457.7-176-416.78c-4.1-11.9-24.47-11.9-29.47 0L1.267 457.7c-3.437 8.141.36 17.53 8.5 21.01 8.078 3.319 17.52-.376 20.97-8.548l36.48-86.39h249.6l36.48 86.39C355.8 476.3 361.8 480 367.1 480c2.078 0 4.203-.407 6.234-1.252C382.4 475.3 386.2 465.9 382.7 457.7zm-301.95-106L192 88.3l111.2 263.5H80.75z" />
  </svg>
);

const SvgA = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgA;
