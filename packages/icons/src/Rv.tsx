import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M96 152c0-13.3 10.7-24 24-24h176c13.3 0 24 10.7 24 24v80c0 13.3-10.7 24-24 24H120c-13.3 0-24-10.7-24-24v-80zm192 72v-64H128v64h160zM224 24c0-13.25 10.7-24 24-24h112c13.3 0 24 10.75 24 24v8h112c61.9 0 112 50.14 112 112v8c0 22.1-17.9 40-40 40h-18.4l77.5 62.7c8.5 6.1 12.9 14.4 12.9 25V384c0 17.7-14.3 32-32 32h-33.6c1 5.2 1.6 10.5 1.6 16 0 44.2-35.8 80-80 80s-80-35.8-80-80c0-5.5.6-10.8 1.6-16H254.4c1 5.2 1.6 10.5 1.6 16 0 44.2-35.8 80-80 80s-80-35.8-80-80c0-7.7 1.09-15.2 3.13-22.2l-80.38-80.4A64.04 64.04 0 0 1 0 284.1V96c0-35.35 28.65-64 64-64h160v-8zM32 96v188.1c0 8.5 3.37 16.6 9.37 22.6l73.53 73.6c14.7-18.2 36.6-28.3 60.2-28.3 27.1 0 50.3 12.6 64.9 32h144V176c0-8.8 7.2-16 16-16h168c4.4 0 8-3.6 8-8v-8c0-44.18-35.8-80-80-80H352V32h-96.9v32h-192c-16.77 0-32 14.33-32 32h.9zm144 288c-20.9 0-38.7 13.4-45.3 32-2.6 5-2.7 10.4-2.7 16 0 26.5 21.5 48 48 48s48-21.5 48-48c0-5.6-1-11-2.7-16-6.6-18.6-24.4-32-45.3-32zm320 0c-20.9 0-38.7 13.4-45.3 32-2.6 5-2.7 10.4-2.7 16 0 26.5 21.5 48 48 48s48-21.5 48-48c0-5.6-1-11-2.7-16-6.6-18.6-24.4-32-45.3-32zm0-32c26.2 0 49.4 12.6 64 32h48v-96H416v96h15.1c15.5-19.4 38.7-32 64.9-32zm-80-160v64h162.4l-80-64H416z" />
  </svg>
);

const SvgRv = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgRv;
