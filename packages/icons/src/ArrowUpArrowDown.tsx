import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M224 160c4.094 0 8.188-1.562 11.31-4.688 6.25-6.25 6.25-16.38 0-22.62l-96-96c-6.25-6.25-16.38-6.25-22.62 0l-96 96c-6.25 6.25-6.25 16.38 0 22.62s16.38 6.25 22.62 0L112 86.63V464c0 8.8 7.2 16 16 16s16-7.156 16-16V86.63l68.69 68.69C215.8 158.4 219.9 160 224 160zm203.3 196.7c-3.1-3.1-7.2-4.7-11.3-4.7s-8.188 1.562-11.31 4.688L336 425.4V48c0-8.84-7.2-16-16-16s-16 7.156-16 16v377.4l-68.69-68.69c-6.25-6.25-16.38-6.25-22.62 0s-6.25 16.38 0 22.62l96 96c6.25 6.25 16.38 6.25 22.62 0l96-96c6.29-6.23 6.29-16.43-.01-22.63z" />
  </svg>
);

const SvgArrowUpArrowDown = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowUpArrowDown;
