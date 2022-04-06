import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 368c-28.5 0-48.4 13.7-60.1 26.7-6.8 6.6-16 7.1-22.6 1.2-6.6-6.8-7.1-16-1.2-22.6 16.1-17.9 44.2-37.3 83.9-37.3s67.8 19.4 83.9 37.3c5.9 6.6 5.4 15.8-1.2 22.6-6.6 5.9-16.7 5.4-22.6-1.2-11.7-13-31.6-26.7-60.1-26.7zm-80-176c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32h-32c-8.8 0-16-7.2-16-16s7.2-16 16-16h64zm112 16c0-8.8 7.2-16 16-16h64c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32h-32c-8.8 0-16-7.2-16-16zm224 48c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zM256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32z" />
  </svg>
);

const SvgFaceUnamused = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFaceUnamused;
