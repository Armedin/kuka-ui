import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M512 176.1c-.4 7.8-2.2 14.5-5.3 20.7-3.2 6.2-7.5 11.7-12.9 16.1-5.3 4.4-11.5 7.7-18.2 9.6-7.5 1.9-14.5 2.4-20.5 1.5H448v224c0 8.5-3.4 16.6-9.4 22.6S424.5 480 416 480H96c-8.49 0-16.63-3.4-22.63-9.4S64 456.5 64 448V224h-7.1c-6.87.9-13.86.4-20.52-1.5-6.67-1.9-12.87-5.2-18.21-9.6-5.34-4.4-9.713-9.9-12.84-16.1C2.203 190.6.388 183.9 0 176.1 0 112 96 32 256 32s256 80 256 144.1zM333.2 288c0-8.5-3.3-16.6-9.3-22.6l-45.3-45.3c-6-6-14.1-9.3-22.6-9.3-8.5 0-16.6 3.3-22.6 9.3l-45.3 45.3c-6 6-9.3 14.1-9.3 22.6 0 8.5 3.3 16.6 9.3 22.6l45.3 45.3c6 6 14.1 9.3 22.6 9.3 8.5 0 16.6-3.3 22.6-9.3l45.3-45.3c6-6 9.3-14.1 9.3-22.6z" />
  </svg>
);

const SvgBreadSliceButterSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBreadSliceButterSolid;
