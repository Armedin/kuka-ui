import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M32 400c0 26.5 21.49 48 48 48h416c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-44.18 0-80-35.8-80-80V48c0-8.84 7.164-16 16-16 8.84 0 16 7.16 16 16v352zm288-208 39.6-39.6c13.1-13.1 34.8-12.3 46.9 1.8l61.9 72.3c7.5 8.7 11.6 19.8 11.6 31.3V352c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V243.9c0-12.7 5.1-25 14.1-34l91.3-91.3c12.5-12.5 32.7-12.5 45.2 0L320 192zm-96-50.7-91.3 91.3c-3 3-4.7 7-4.7 11.3V352h320v-94.2c0-3.9-1.4-7.6-3.9-10.5l-61.9-72.2-39.6 39.5c-6 6-14.1 8.5-22.6 8.5-8.5 0-16.6-2.5-22.6-8.5L224 141.3z" />
  </svg>
);

const SvgChartArea = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgChartArea;
