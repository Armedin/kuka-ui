import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M432 480c-8.844 0-16-7.156-16-15.1V99.74l-178.8 261.3c-6 8.749-20.44 8.749-26.44 0L32 99.74v364.3C32 472.8 24.84 480 16 480s-16-7.2-16-16V48.03c0-6.1 4.562-13.22 11.28-15.28 6.812-2.156 13.97.469 17.94 6.25L224 323.7 418.8 39c4-5.781 11.16-8.406 17.94-6.25C443.4 34.81 448 41.03 448 48.03v415.1c0 9.67-7.2 16.87-16 16.87z" />
  </svg>
);

const SvgM = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgM;
