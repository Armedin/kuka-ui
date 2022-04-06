import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M375.6 339.8c-5.8 34.8-35.8 60.2-71 60.2H191.1c-7.9 0-16-7.2-16-16s8.1-16 16-16h113.5c19.5 0 36.2-14.1 39.4-33.4l.2-1.2c1.5-8.7 9.7-14.6 18.4-13.2 8.7 1.5 14.6 9.7 13.2 18.4l-.2 1.2zM176 192c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32h-32c-8.8 0-16-7.2-16-16s7.2-16 16-16h64zm112 16c0-8.8 7.2-16 16-16h64c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32h-32c-8.8 0-16-7.2-16-16zm224 48c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zM256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32z" />
  </svg>
);

const SvgFaceSmirking = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFaceSmirking;
