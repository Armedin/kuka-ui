import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m507.3 267.3-112 112c-3.1 3.1-7.2 4.7-11.3 4.7s-8.188-1.562-11.31-4.688c-6.25-6.25-6.25-16.38 0-22.62L457.4 272H54.63l84.69 84.69c6.25 6.25 6.25 16.38 0 22.62C136.2 382.4 132.1 384 128 384s-8.188-1.562-11.31-4.688l-112-112c-6.25-6.25-6.25-16.38 0-22.62l112-112c6.25-6.25 16.38-6.25 22.62 0s6.25 16.38 0 22.62L54.63 240h402.8l-84.69-84.69c-6.25-6.25-6.25-16.38 0-22.62s16.38-6.25 22.62 0l112 112c6.24 6.21 6.24 16.41-.06 22.61z" />
  </svg>
);

const SvgArrowsLeftRight = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowsLeftRight;
