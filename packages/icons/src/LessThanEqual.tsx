import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="m41.94 206.8 352 143.1a15.922 15.922 0 0 0 6.062 1.188c6.297 0 12.28-3.75 14.81-9.938 3.344-8.186-.578-17.53-8.75-20.87L90.25 192l315.8-129.2c8.172-3.342 12.09-12.69 8.75-20.87-3.359-8.186-12.73-12.15-20.88-8.748l-352 143.1C35.92 179.7 32 185.5 32 192s3.92 12.4 9.94 14.8zM432 448H16c-8.844 0-16 7.156-16 16 0 8.8 7.156 16 16 16h416c8.844 0 16-7.156 16-15.1 0-9.7-7.2-16.9-16-16.9z" />
  </svg>
);

const SvgLessThanEqual = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgLessThanEqual;
