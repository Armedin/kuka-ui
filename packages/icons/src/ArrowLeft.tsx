import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M448 256c0 8.8-7.4 16-16.6 16H54.11l140.7 149.3c6.157 6.531 5.655 16.66-1.118 22.59A17.316 17.316 0 0 1 182.5 448c-4.505 0-9.009-1.75-12.28-5.25l-165.9-176c-5.752-6.094-5.752-15.41 0-21.5l165.9-176c6.19-6.562 16.69-7 23.45-1.094 6.773 5.938 7.275 16.06 1.118 22.59L54.11 240h377.3c9.19 0 16.59 7.2 16.59 16z" />
  </svg>
);

const SvgArrowLeft = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowLeft;
