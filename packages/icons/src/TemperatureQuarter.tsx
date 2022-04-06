import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M208 384c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-20.88 13.37-38.63 31.1-45.25L144 272c0-8.875 7.125-16 15.1-16s16 7.125 16 16v66.75C194.6 345.4 208 363.1 208 384zm48-84.6c19.9 22.5 32 52.1 32 84.6 0 70.75-57.25 128-127.1 128h-1.8C88.73 511.5 31.6 453.62 32 383.4c.125-32.25 12.25-61.62 31.1-84V96C63.1 43 105.2.9 158.2.9S256 43 256 96v203.4zm0 84.6c0-39.88-22.87-62.13-31.1-72.5V96c0-35.25-28.75-64-63.1-64S96 60.75 96 96v215.5c-9.5 10.62-31.75 32.5-31.1 72-1.15 52.7 41.7 96.1 94.5 96.5h.625C212.9 480 256 436.9 256 384z" />
  </svg>
);

const SvgTemperatureQuarter = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTemperatureQuarter;
