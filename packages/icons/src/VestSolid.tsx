import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M437.3 239.9 384 160V32c0-17.67-14.33-32-32-32h-32a23.97 23.97 0 0 0-13.31 4.031l-25 16.66c-35.03 23.38-80.28 23.38-115.4 0l-25-16.66C137.4 1.406 132.8 0 128 0H96C78.33 0 64 14.33 64 32v128l-53.25 79.9A63.8 63.8 0 0 0 0 275.4V480c0 17.67 14.33 32 32 32h160V288c0-3.439.555-6.855 1.643-10.12l13.49-40.48L150.2 66.56c23 12.87 48.3 19.69 73.8 19.69s50.79-6.824 73.81-19.69L224 288v224h192c17.67 0 32-14.33 32-32V275.4c0-12.7-3.7-25-10.7-35.5zm-306 131.4-48 48c-3.11 3.1-7.21 4.7-11.3 4.7s-8.188-1.562-11.31-4.688c-6.25-6.25-6.25-16.38 0-22.62l48-48c6.25-6.25 16.38-6.25 22.62 0s6.29 16.408-.01 22.608zm256 48c-3.1 3.1-7.2 4.7-11.3 4.7s-8.188-1.562-11.31-4.688l-48-48c-6.25-6.25-6.25-16.38 0-22.62s16.38-6.25 22.62 0l48 48c6.29 6.208 6.29 16.408-.01 22.608z" />
  </svg>
);

const SvgVestSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgVestSolid;
