import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M228.4 153.7 394.9 7.918c11.3-9.838 27.8-10.587 39.9-1.804 12.1 8.786 16.5 24.756 10.6 38.496L368.5 224H480c13.3 0 25.3 8.3 29.1 20.7 5.5 12.5 2 26.6-8 35.4l-52.7 46.1 182.4 142.9c10.4 8.2 12.3 23.3 4.1 33.7-8.2 10.4-23.3 12.3-33.7 4.1L9.196 42.89C-1.236 34.71-3.065 19.63 5.112 9.196 13.29-1.236 28.37-3.065 38.81 5.112L228.4 153.7zm-89.5 78.2 15.9-14.8 88.9 70.9H160c-13.3 0-25.3-8.3-30-20.7-4.6-12.5-1.1-26.6 8.9-35.4zm55.7 235.5 69.9-163 109.9 85.7-129.3 114c-11.3 9.8-27.8 10.6-39.9 1.8-12.1-8.8-16.5-24.8-10.6-38.5z" />
  </svg>
);

const SvgBoltSlashSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBoltSlashSolid;
