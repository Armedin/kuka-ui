import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M324.4 64c15.2 0 27.6 12.37 27.6 27.63 0 6.69-2.4 13.17-6.8 18.17L240 230v193.6c0 13.5-10.9 24.4-24.4 24.4-5.3 0-10.4-1.7-14.7-4.9l-76.2-57.5c-8-6.1-12.7-15.5-12.7-25.6V230L6.836 109.8C2.429 104.8 0 98.32 0 91.63 0 76.37 12.37 64 27.63 64H324.4zM144 224v136l64 48.3V223.1c0-3 1.4-6.7 3.1-9.6L314.7 95.1H37.26L140 213.5c2.6 2.9 3.1 6.6 3.1 9.6l.9.9zm352 176c8.8 0 16 7.2 16 16s-7.2 16-16 16H336c-8.8 0-16-7.2-16-16s7.2-16 16-16h160zM320 256c0-8.8 7.2-16 16-16h160c8.8 0 16 7.2 16 16s-7.2 16-16 16H336c-8.8 0-16-7.2-16-16zM496 80c8.8 0 16 7.16 16 16 0 8.8-7.2 16-16 16h-96c-8.8 0-16-7.2-16-16 0-8.84 7.2-16 16-16h96z" />
  </svg>
);

const SvgFilterList = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFilterList;
