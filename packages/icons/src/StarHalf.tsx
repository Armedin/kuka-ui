import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M293.3.612C304.2 3.118 311.9 12.82 311.9 24v384.7c0 8.8-4.8 17-12.7 21.1l-149.1 79.3c-7.2 4.3-17 3.6-24.5-1.7-7.4-5.3-11.1-15.3-10.5-23.5l27.1-155.5L31.11 218.3c-6.46-6.4-8.75-15.9-5.91-24.6 2.83-8.6 10.3-14.9 19.29-16.2l153.21-22.7 68.6-141.28c4.9-10.06 16.1-15.413 27-12.907zM226.5 168.8c-4.6 9.5-13.6 16.1-24.1 17.7L64.99 206.8l99.81 98.8c7.3 6.5 10.7 17.8 9 28.1l-23.6 139.5 129.7-69.3V58.8l-53.4 110z" />
  </svg>
);

const SvgStarHalf = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgStarHalf;
