import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M432 160h-32c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16 7.2 16 16v256c0 8.812-7.188 16-16 16H80c-8.81 0-16-7.2-16-16V208c0-8.8 7.19-16 16-16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H80c-26.47 0-48 21.5-48 48v256c0 26.5 21.53 48 48 48h352c26.47 0 48-21.53 48-48V208c0-26.5-21.5-48-48-48zm-272-32c4.094 0 8.188-1.562 11.31-4.688L240 54.63V336c0 8.844 7.156 16.02 16 16.02s16-7.22 16-16.02V54.63l68.69 68.69C343.8 126.4 347.9 128 352 128c9.139 0 16-7.473 16-16 0-4.094-1.562-8.188-4.688-11.31l-96-96C264.2 1.562 260.1 0 256 0s-8.2 1.562-11.3 4.688l-96 96A16.032 16.032 0 0 0 144 112c0 8.5 6.9 16 16 16z" />
  </svg>
);

const SvgArrowUpFromSquare = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowUpFromSquare;
