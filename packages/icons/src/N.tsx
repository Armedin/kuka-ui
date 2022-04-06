import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M368 480c-4.625 0-9.125-1.1-12.22-5.656L32 91.7V464c0 8.844-7.156 15.1-16 15.1S0 472.8 0 464V48.01c0-6.719 4.188-12.72 10.5-15.03 6.25-2.312 13.41-.438 17.72 4.687L352 420.3V48.01c0-8.844 7.156-15.1 16-15.1s16 6.26 16 15.1v415.1c0 6.719-4.188 12.72-10.5 15.03-1.8 1.56-3.7 1.86-5.5 1.86z" />
  </svg>
);

const SvgN = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgN;
