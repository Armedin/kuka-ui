import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M358.6 309.5 232.2 183.1l61.92-61.92c9.582-9.578 12.45-24 7.268-36.52C296.3 72.16 284 64 270.5 64H33.51c-9.26 0-17.63 3.75-23.697 9.81C3.75 79.88 0 88.25 0 97.51v236.1c0 13.57 8.158 25.77 20.69 30.96 4.14 2.63 8.5 3.43 12.81 3.43a33.52 33.52 0 0 0 23.71-9.816l61.92-61.92 126.4 126.4C251.7 428.9 259.9 432 268.1 432s16.38-3.125 22.63-9.375l67.88-67.88C371.1 342.3 371.1 321.1 358.6 309.5zm-90.5 89.6L119.1 251l-84.52 84.6-1.64.3c-.58-.3-.94-.8-.94-1.4V97.51L33.51 96h236.1c.625 0 1.164.36 1.398.93a1.522 1.522 0 0 1-.328 1.648L187 183.1l148.1 149-67 67z" />
  </svg>
);

const SvgUpLeft = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgUpLeft;
