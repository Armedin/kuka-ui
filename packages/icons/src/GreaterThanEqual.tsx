import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M416 192c0-6.498-3.922-12.34-9.938-14.81l-352-143.1c-8.142-4.27-17.512-.31-20.872 7.88-3.35 8.19.58 17.53 8.75 20.87l315.8 129.2-315.8 129.2c-8.172 3.344-12.09 12.69-8.75 20.87C35.72 348.3 41.7 352 48 352c2.031 0 4.078-.375 6.062-1.188l352-143.1C412.1 204.4 416 198.5 416 192zM0 464c0 8.842 7.156 15.1 16 15.1h416c8.844 0 16-7.156 16-15.1 0-8.844-7.156-16-16-16H16c-8.844 0-16 7.2-16 16z" />
  </svg>
);

const SvgGreaterThanEqual = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgGreaterThanEqual;
