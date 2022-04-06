import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M464 32c-59.59 0-112.2 37.79-144 95.46C288.2 69.79 235.6 32 176 32 78.8 32 0 132.3 0 256s78.8 224 176 224c59.59 0 112.2-37.79 144-95.46C351.8 442.2 404.4 480 464 480c97.2 0 176-100.3 176-224S561.2 32 464 32zM176 416c-35.91 0-68.22-25.1-88.88-64.89 2.93.39 5.84.89 8.88.89 35.35 0 64-28.65 64-64s-28.7-64-64-64c-11.9 0-21.2 3-30.24 7.9C74.21 156.2 121 96 176 96c60.7 0 112 73.3 112 160s-51.3 160-112 160zm288 0c-35.91 0-68.22-25.1-88.88-64.89 2.98.39 4.98.89 8.88.89 35.35 0 64-28.65 64-64s-28.65-64-64-64c-11 0-21.2 3.031-30.24 7.922C362.2 156.2 409 96 464 96c60.7 0 112 73.3 112 160s-51.3 160-112 160z" />
  </svg>
);

const SvgEyesSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgEyesSolid;
