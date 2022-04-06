import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M192 354.9v-50.8c0-8.7-7.2-16.1-16-16.1s-16 7.2-16 16v50.88c-18.6 6.62-32 24.22-32 45.12 0 26.5 21.5 48 48 48s48-21.5 48-48c0-20.9-13.4-38.5-32-45.1zM384 32c-35.25 0-64 28.75-64 64s28.75 64 64 64 64-28.75 64-64-28.8-64-64-64zm0 96c-17.75 0-32-14.25-32-32s14.25-32 32-32 32 14.25 32 32-14.2 32-32 32zM256 80c0-44.12-35.9-80-80-80S96 35.88 96 80v241.9c-20.25 20.7-32 48.9-32 78.1 0 61.8 50.2 112 112 112s112-50.25 112-112c0-29.25-11.75-57.38-32-78.13V80zm-80 400c-44.1 0-80-35.9-80-80 0-25.5 12.25-48.88 32-63.75V80c0-26.5 21.5-48 48-48s48 21.5 48 48v256.2c19.8 14.8 32 38.3 32 63.8 0 44.1-35.9 80-80 80z" />
  </svg>
);

const SvgTemperatureLow = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTemperatureLow;
