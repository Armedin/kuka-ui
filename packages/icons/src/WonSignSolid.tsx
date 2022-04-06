import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M119.1 224H183l41.1-167.76C228.5 41.99 241.3 32 256 32s27.5 9.99 31 24.24L328.1 224h64.8l56.7-170.12c5.6-16.76 23.8-25.83 40.5-20.24 16.8 5.59 25.8 23.71 20.3 40.48L460.4 224H480c17.7 0 32 14.3 32 32s-14.3 32-32 32h-40.9l-56.7 170.1c-4.5 13.5-18.3 22.4-31.6 21-14.2.3-26.4-9.5-30.7-23.3L279 288h-46.9L191 455.8c-3.4 13.8-15.6 23.6-29.8 23.3-14.2 1.4-27.1-7.5-31.6-21L72.94 288H32C14.33 288 .001 273.7.001 256S14.33 224 32 224h19.6L1.643 74.12C-3.946 57.35 5.115 39.23 21.88 33.64c16.77-5.59 34.89 3.48 40.48 20.24L119.1 224zm21.3 64 15.2 45.6L167 288h-26.6zm107.7-64H263l-7-28.1-7.9 28.1zm96 64 12.3 45.6 15.2-45.6h-27.5z" />
  </svg>
);

const SvgWonSignSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgWonSignSolid;
