import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M224 96c8.8 0 16 7.2 16 16v105.4l43.3 43.3c6.3 6.2 6.3 16.4 0 22.6-6.2 6.3-16.4 6.3-22.6 0l-48-48c-3-3-5.6-7.1-5.6-11.3V112c0-8.8 8.1-16 16-16h.9zm0-96c123.7 0 224 100.3 224 224v224c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V224C0 100.3 100.3 0 224 0zm0 32C117.1 32 32 117.1 32 224c0 106 85.1 192 192 192 106 0 192-86 192-192 0-106.9-86-192-192-192zm192 307.4C376.8 404.5 305.5 448 224 448S71.2 404.5 32 339.4V448c0 17.7 14.33 32 32 32h320c17.7 0 32-14.3 32-32V339.4z" />
  </svg>
);

const SvgClockDesk = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgClockDesk;
