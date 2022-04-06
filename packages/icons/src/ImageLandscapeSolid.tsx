import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M528 64H48C21.49 64 0 85.49 0 112v288c0 26.5 21.49 48 48 48h480c26.51 0 48-21.49 48-48V112c0-26.51-21.5-48-48-48zm-352.9 96c17.68 0 32 14.33 32 32s-14.32 32-32 32c-17.67 0-32-14.33-32-32s15.2-32 32-32zm271 215.6c-2.8 5.2-8.2 8.4-14.1 8.4H144a15.991 15.991 0 0 1-14.26-8.75 16.003 16.003 0 0 1 1.332-16.68l70-96C204.1 258.4 208.9 256 213.1 256c5.11 0 9.914 2.441 12.93 6.574l22.35 30.66 62.74-94.11C314.1 194.7 319.1 192 325.3 192c5.348 0 10.34 2.672 13.31 7.125l106.7 160c3.29 4.875 3.59 11.175.79 16.475z" />
  </svg>
);

const SvgImageLandscapeSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgImageLandscapeSolid;
