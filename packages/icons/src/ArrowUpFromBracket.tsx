import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="m212.7 4.688-144 144c-6.25 6.25-6.25 16.38 0 22.62s16.38 6.25 22.62 0L208 54.63V336c0 8.844 7.156 16 16 16s16-7.156 16-16V54.63l116.7 116.7c6.25 6.25 16.38 6.25 22.62 0s6.25-16.38 0-22.62l-144-144C232.2 1.562 228.1 0 224 0s-8.2 1.562-11.3 4.688zM416 336v96c0 26.47-21.53 48-48 48H80c-26.47 0-48-21.5-48-48v-96c0-8.8-7.16-16-16-16s-16 7.2-16 16v96c0 44.1 35.88 80 80 80h288c44.13 0 80-35.88 80-80v-96c0-8.844-7.156-16-16-16s-16 7.2-16 16z" />
  </svg>
);

const SvgArrowUpFromBracket = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowUpFromBracket;
