import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M379.8 225.7c-3.1 3.6-7.5 5.4-11.8 5.4-3.844 0-7.703-1.426-10.77-4.31L208 86.12v377.3c0 9.171-7.156 16.59-15.1 16.59S176 472.6 176 463.4V86.12L26.8 226.82c-6.55 5.28-16.66 5.68-22.644-1.12-5.937-6.8-5.453-17.3 1.078-23.5l176-165.9c6.094-5.768 15.44-5.768 21.53 0l176 165.9c6.536 6.2 7.036 16.7 1.036 23.5z" />
  </svg>
);

const SvgArrowUp = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowUp;
